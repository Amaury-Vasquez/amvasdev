import { FC } from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { IconLink } from '@/components';
import { IconLinkItem } from '@/interfaces';

export const SOCIAL_MEDIA_LINKS: IconLinkItem[] = [
  { url: 'https://github.com/Amaury-Vasquez/', icon: FaGithub, name: 'github' },
  {
    url: 'https://www.linkedin.com/in/amaury-vasquez-dev/',
    icon: FaLinkedin,
    name: 'linkedin',
  },
  {
    url: 'https://twitter.com/AmauryVasquez11',
    icon: FaTwitter,
    name: 'twitter',
  },
];

const SocialMediaLinks: FC = () => (
  <>
    {SOCIAL_MEDIA_LINKS.map(({ url, icon, name }, idx) => (
      <IconLink
        Icon={icon}
        href={url}
        key={`footer-social-media-link:${idx}`}
        target="_blank"
        aria-label={name}
      />
    ))}
  </>
);

export default SocialMediaLinks;
