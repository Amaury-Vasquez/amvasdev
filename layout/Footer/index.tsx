import clsx from 'clsx';
import { FC } from 'react';
import { SocialMediaLinks } from '@/components';

const Footer: FC = () => (
  <footer
    className={clsx(
      'flex justify-between w-full items-center h-fit px-4 py-2',
      'max-xs:grid max-xs:place-items-center max-xs:grid-cols-1'
    )}
  >
    <p className="font-medium text-center max-xs:w-full max-xs:row-start-2">
      @amvasdev © All rights reserved
    </p>
    <div className="flex gap-4 max-xs:w-full max-xs:justify-center">
      <SocialMediaLinks />
    </div>
  </footer>
);

export default Footer;
