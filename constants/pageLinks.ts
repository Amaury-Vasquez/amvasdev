import { ButtonLinkItem } from '../interfaces';

export const PAGE_LINKS: ButtonLinkItem[] = [
  {
    name: 'Home page',
    url: '/',
    variant: 'neutral',
  },
  {
    name: 'Experience',
    variant: 'primary',
    url: '/experience',
  },
  {
    name: 'About',
    url: '/about',
    variant: 'secondary',
  },
  {
    name: 'My work',
    url: '/my-work',
    variant: 'accent',
  },
  {
    name: 'Contact',
    url: '/contact',
    variant: 'info',
  },
];
