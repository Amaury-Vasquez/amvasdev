import { useCallback, useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';
import { GAME_DATA, IGameVariant } from '@/constants/memoryGame';
import { shuffleArray } from '@/utils/array';
import { getRandomNumArray } from '@/utils/randomize';

interface ICard {
  id: number;
  imgUrl: string;
  flipped: boolean;
  foundMatch: boolean;
  willFlip: boolean;
}

function initializeCards(
  imgBaseUrl: string,
  imgFormat: string,
  exclude?: number[]
): ICard[] {
  const numArray = getRandomNumArray(2, 1, 400, exclude);
  const shuffledNums = shuffleArray([...numArray, ...numArray]);
  return shuffledNums.map((num) => ({
    id: num,
    imgUrl: `${imgBaseUrl}/${num}.${imgFormat}`,
    flipped: false,
    foundMatch: false,
    willFlip: false,
  }));
}

function copyCards(cards: ICard[]) {
  return cards.map((card) => ({ ...card }));
}

const RICK_AND_MORTY_PLACEHOLDERS = [104, 249];

export function useMemoryGame() {
  const [cookies] = useCookies(['gameVariant']);
  const {
    data: { imgBaseUrl, imageFormat },
    variant,
  } = useMemo(() => {
    const variant = (cookies.gameVariant as IGameVariant) || 'rick & morty';
    return { data: GAME_DATA[variant], variant };
  }, [cookies.gameVariant]);
  const [cards, setCards] = useState(
    initializeCards(
      imgBaseUrl,
      imageFormat,
      variant === 'rick & morty' ? RICK_AND_MORTY_PLACEHOLDERS : []
    )
  );
  const [loadingCount, setLoadingCount] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [prevCard, setPrevCard] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleCardClick = useCallback(
    (pos: number) => {
      const newCards = copyCards(cards);
      setMoves((moves) => moves + 1);

      if (selectedCard === null) {
        setSelectedCard(pos);
        newCards[pos].willFlip = true;
        setCards([...newCards]);
        setTimeout(() => {
          newCards[pos].flipped = true;
          newCards[pos].willFlip = false;
          setCards([...newCards]);
        }, 400);
      } else if (
        selectedCard !== null &&
        cards[selectedCard].id !== pos &&
        prevCard === null
      ) {
        setPrevCard(selectedCard);
        setSelectedCard(pos);

        if (cards[selectedCard].id === cards[pos].id) {
          newCards[pos].flipped = true;
          newCards[selectedCard].foundMatch = true;
          newCards[pos].foundMatch = true;
          newCards[selectedCard].willFlip = false;
          newCards[pos].willFlip = false;
          setScore((score) => score + 1);
          setSelectedCard(null);
          setPrevCard(null);
          setCards([...newCards]);
        } else {
          newCards[pos].willFlip = true;
          setCards([...newCards]);

          setTimeout(() => {
            newCards[pos].willFlip = false;
            newCards[pos].flipped = true;
            setCards([...newCards]);
          }, 400);

          setTimeout(() => {
            newCards[selectedCard].flipped = false;
            newCards[pos].flipped = false;
            newCards[selectedCard].willFlip = false;
            newCards[pos].willFlip = false;
            setSelectedCard(null);
            setPrevCard(null);
            setCards([...newCards]);
          }, 2000);
        }
      }
    },
    [selectedCard, prevCard, cards]
  );

  const onImageLoad = useCallback(() => {
    setLoadingCount((count) => count + 1);
  }, []);

  const resetGame = useCallback(() => {
    setLoadingCount(0);
    setCards(
      initializeCards(
        imgBaseUrl,
        imageFormat,
        variant === 'rick & morty' ? RICK_AND_MORTY_PLACEHOLDERS : []
      )
    );
    setSelectedCard(null);
    setPrevCard(null);
    setScore(0);
    setMoves(0);
    setGameOver(false);
    setImagesLoaded(false);
  }, [imageFormat, imgBaseUrl, variant]);

  useEffect(() => {
    if (loadingCount === cards.length) {
      setTimeout(() => setImagesLoaded(true), 1000);
    }
  }, [loadingCount, cards.length]);

  useEffect(() => {
    if (score === cards.length / 2) {
      setGameOver(true);
    }
  }, [gameOver, score, cards]);

  return {
    cards,
    selectedCard,
    prevCard,
    disableClick: gameOver || (selectedCard !== null && prevCard !== null),
    handleCardClick,
    loadingCount,
    imagesLoaded,
    score,
    moves,
    gameOver,
    resetGame,
    data: GAME_DATA[variant],
    variant,
    onImageLoad,
  };
}
