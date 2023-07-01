import { ButtonLinkItem } from '../interfaces';

export const PAGE_LINKS: ButtonLinkItem[] = [
  {
    name: 'Home page',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
    variant: 'primary',
  },
  {
    name: 'Skills',
    url: '/skills',
    variant: 'secondary',
  },
  {
    name: 'My work',
    url: '/my-work',
    variant: 'accent',
  },
  {
    name: 'Experience',
    url: '/experience',
    variant: 'neutral',
  },
  {
    name: 'Education',
    url: '/education',
    variant: 'success',
  },
  {
    name: 'Contact',
    url: '/contact',
    variant: 'info',
  },
];
