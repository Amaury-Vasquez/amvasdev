'use client';
import { useToggleMenu } from '@amvasdev/usehooks';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { IoOptionsOutline } from 'react-icons/io5';
import { MdOutlineRestartAlt } from 'react-icons/md';
import GameCard from './GameCard';
import { Button, Link, Dialog, IconButton } from '@/components';
import { GAME_DATA } from '@/constants/memoryGame';
import { useDialog } from '@/hooks/useDialog';
import { useMemoryGame } from '@/hooks/useMemoryGame';

export default function MemoryGame() {
  const {
    cards,
    score,
    moves,
    gameOver,
    data,
    disableClick,
    selectedCard,
    variant,
    imagesLoaded,
    onImageLoad,
    resetGame,
    handleCardClick,
  } = useMemoryGame();
  const ref = useRef<HTMLDivElement>(null);
  const { ref: gameEndRef, openDialog, closeDialog } = useDialog();
  const { showMenu, isPanelClosing, togglePanel } = useToggleMenu(ref);

  useEffect(() => {
    if (gameOver) {
      openDialog();
    }
  }, [gameOver, openDialog]);

  const handleResetGame = () => {
    resetGame();
    closeDialog();
  };

  return (
    <main className="p-8 flex flex-col">
      <Dialog
        ref={gameEndRef}
        className="flex flex-col gap-4 md:w-[420px] w-full text-center"
      >
        <h3 className="text-xl font-semibold text-primary">
          Congratulations, you won!
        </h3>
        <p>
          You completed the game in <strong>{moves} moves</strong> <br />
          Time: <strong>time minutes</strong>
        </p>
        <div className="w-full grid-cols-2 grid gap-4 mt-4">
          <Button variant="primary" onClick={handleResetGame}>
            Play again
          </Button>
          <Link variant="secondary" href="/" outlined onClick={closeDialog}>
            Go Home
          </Link>
        </div>
      </Dialog>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold capitalize">{`${variant} memory game`}</h1>
          <div className="relative" ref={ref}>
            <IconButton Icon={IoOptionsOutline} onClick={togglePanel} />
            {showMenu ? (
              <ul
                className={clsx(
                  'absolute z-50 top-14 origin-top-left animate-to-bottom bg-base-100 w-60 rounded-lg shadow-md left-0',
                  {
                    'animate-to-top': isPanelClosing,
                  }
                )}
              >
                {Object.keys(GAME_DATA).map((variant, idx) => (
                  <li
                    className={clsx(
                      'p-3 capitalize bg-neutral-100 bg-opacity-0 hover:bg-opacity-30 font-semibold hover:opacity-70 cursor-pointer transition-colors'
                    )}
                    key={variant + idx}
                  >
                    {variant}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <IconButton Icon={MdOutlineRestartAlt} onClick={resetGame} />
        </div>
        <div className="flex items-center gap-4 shadow-md rounded-lg py-2 px-4 border border-solid border-base-300 bg-accent-content">
          <p className="text-lg text-accent font-semibold">Score: {score}</p>
          <p className="text-lg text-accent font-semibold">Moves: {moves} </p>
        </div>
      </div>
      <div className="grid grid-cols-8 gap-4 mt-8 relative">
        {!imagesLoaded ? (
          <div className="absolute w-full h-full bg-black bg-opacity-95 flex flex-col gap-y-4 items-center justify-center z-50">
            <p className="text-2xl font-bold text-white animate-pulse">
              Please wait a few seconds...
            </p>
            <div className="flex gap-2">
              <span className="loading loading-spinner loading-lg" />
            </div>
          </div>
        ) : null}
        {cards.map(({ flipped, foundMatch, willFlip, imgUrl }, idx) => (
          <GameCard
            disabled={
              disableClick || (flipped && foundMatch) || selectedCard === idx
            }
            willFlip={willFlip}
            key={`game-card-${idx}-${flipped}-${willFlip}-${foundMatch}`}
            imgCover={data.cardCover}
            isFlipped={flipped}
            onClick={() => handleCardClick(idx)}
            imgUrl={imgUrl}
            onLoad={onImageLoad}
            size={data.imgSize}
          />
        ))}
      </div>
    </main>
  );
}
