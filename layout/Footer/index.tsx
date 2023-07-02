import clsx from 'clsx';
import { FC } from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { IconLink } from '@/components';
import { IconLinkItem } from '@/interfaces';

const SOCIAL_MEDIA_LINKS: IconLinkItem[] = [
  { url: 'https://github.com/Amaury-Vasquez/', icon: FaGithub },
  {
    url: 'https://www.linkedin.com/in/amaury-vasquez-dev/',
    icon: FaLinkedin,
  },
  { url: 'https://twitter.com/AmauryVasquez11', icon: FaTwitter },
];

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
      {SOCIAL_MEDIA_LINKS.map(({ url, icon }, idx) => (
        <IconLink
          Icon={icon}
          href={url}
          key={`footer-social-media-link:${idx}`}
          target="_blank"
        />
      ))}
    </div>
  </footer>
);

export default Footer;
