import clsx from 'clsx';
import { FC, HTMLProps } from 'react';
import { IconType } from 'react-icons';
import { ButtonType } from '@/types/buttonTypes';

export interface IconButtonProps extends HTMLProps<HTMLButtonElement> {
  Icon: IconType;
  className?: string;
  iconClassName?: string;
  tooltip?: string;
  type?: ButtonType;
}

const IconButton: FC<IconButtonProps> = ({
  Icon,
  className,
  tooltip,
  iconClassName,
  ...props
}) => (
  <button
    className={clsx(
      'btn btn-ghost btn-circle flex items-center p-2 justify-center focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-50',
      className
    )}
    {...props}
  >
    <Icon className={clsx('w-full h-full', iconClassName)} />
  </button>
);

export default IconButton;
