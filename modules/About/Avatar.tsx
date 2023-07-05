import clsx from 'clsx';
import Image from 'next/image';
import { FC, useState } from 'react';

const Avatar: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="avatar">
      <figure
        className={clsx(
          'w-40 rounded-full relative h-40 overflow-hidden ring-2 ring-offset-base-300 ring-offset-2',
          isLoading && 'animate-pulse bg-base-100'
        )}
      >
        <Image
          alt="Amaury Vasquez pic"
          className={clsx(!isLoading && 'animate-fadeIn')}
          src="https://i.imgur.com/TvPavKp.jpg"
          onLoadingComplete={() => setIsLoading(false)}
          fill
          priority
        />
      </figure>
    </div>
  );
};

export default Avatar;
