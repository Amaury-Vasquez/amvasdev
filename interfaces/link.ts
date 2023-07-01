import { IconType } from 'react-icons';
import { ButtonVariants } from '../types/buttonTypes';

export interface LinkItem {
  name?: string;
  url: string;
}

export interface IconLinkItem extends LinkItem {
  icon: IconType;
}

export interface ButtonLinkItem extends LinkItem {
  variant?: ButtonVariants;
}
