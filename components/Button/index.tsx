import clsx from 'clsx';
import { FC, HTMLProps, ReactNode } from 'react';
import { ButtonVariants, ButtonType, ButtonSizes } from '@/types/buttonTypes';

const VARIANT_STYLES = {
  base: 'hover:text-primary',
  neutral: 'btn-neutral hover:text-primary',
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

export interface ButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'size'> {
  children: ReactNode;
  className?: string;
  tooltip?: string;
  type?: ButtonType;
  size?: ButtonSizes;
  variant?: ButtonVariants;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  tooltip,
  variant = 'base',
  size,
  ...props
}) => (
  <button
    className={clsx(
      'btn whitespace-nowrap',
      variant && VARIANT_STYLES[variant],
      size && SIZE_STYLES[size],
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;
