import clsx from 'clsx';
import { FC, HTMLProps, ReactNode } from 'react';
import { ButtonVariants, ButtonType, ButtonSizes } from '@/types/buttonTypes';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { LinkTarget } from '@/types/linkTypes';

const VARIANT_STYLES = {
  base: '',
  neutral: 'btn-neutral',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  ghost: 'btn-ghost',
  link: 'btn-link',
  info: 'btn-info',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error',
};

const SIZE_STYLES = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: '',
  lg: 'btn-lg',
};

export interface LinkProps extends NextLinkProps {
  children: ReactNode;
  className?: string;
  tooltip?: string;
  target?: LinkTarget;
  size?: ButtonSizes;
  variant?: ButtonVariants;
}

const Link: FC<LinkProps> = ({
  children,
  className,
  tooltip,
  variant,
  size,
  ...props
}) => (
  <NextLink
    className={clsx(
      'btn whitespace-nowrap',
      variant && VARIANT_STYLES[variant],
      size && SIZE_STYLES[size],
      className
    )}
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </NextLink>
);

export default Link;
