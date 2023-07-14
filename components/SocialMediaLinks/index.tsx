import { FC } from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { IconLink } from '@/components';
import { IconLinkItem } from '@/interfaces';

export const SOCIAL_MEDIA_LINKS: IconLinkItem[] = [
  { url: 'https://github.com/Amaury-Vasquez/', icon: FaGithub },
  {
    url: 'https://www.linkedin.com/in/amaury-vasquez-dev/',
    icon: FaLinkedin,
  },
  { url: 'https://twitter.com/AmauryVasquez11', icon: FaTwitter },
];

const SocialMediaLinks: FC = () => (
  <>
    {SOCIAL_MEDIA_LINKS.map(({ url, icon }, idx) => (
      <IconLink
        Icon={icon}
        href={url}
        key={`footer-social-media-link:${idx}`}
        target="_blank"
      />
    ))}
  </>
);

export default SocialMediaLinks;
