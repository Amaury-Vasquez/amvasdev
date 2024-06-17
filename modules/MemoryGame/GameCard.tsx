import clsx from 'clsx';
import Image from 'next/image';

export interface IGameCardProps {
  imgUrl: string;
  onLoad: () => void;
  onClick: () => void;
  size: number;
  isFlipped: boolean;
  willFlip: boolean;
  imgCover: string;
  disabled: boolean;
}

export default function GameCard({
  imgUrl,
  onLoad,
  onClick,
  imgCover,
  isFlipped,
  willFlip,
  disabled,
  size = 300,
}: IGameCardProps) {
  return (
    <button
      className={clsx(
        'relative aspect-square flex w-full m-0 p-0 disabled:cursor-not-allowed transition-transform',
        { 'animate-flip': willFlip, 'animate-fade-in': !willFlip }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <Image
        fill
        src={isFlipped ? imgUrl : imgCover}
        alt={`card #i`}
        className="rounded-md"
        onLoad={onLoad}
        sizes={`${size}px`}
      />
      <div className="absolute z-20 hover:bg-black hover:bg-opacity-50 w-full h-full transition-colors" />
    </button>
  );
}
