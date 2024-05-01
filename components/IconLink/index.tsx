import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { FC } from 'react';
import { IconType } from 'react-icons';
import { ButtonSizes } from '@/types/buttonTypes';
import { LinkTarget } from '@/types/linkTypes';

const SIZE_STYLES = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

export interface IconLinkProps extends LinkProps {
  Icon: IconType;
  className?: string;
  iconClassName?: string;
  tooltip?: string;
  size?: ButtonSizes;
  target?: LinkTarget;
}

const IconLink: FC<IconLinkProps> = ({
  Icon,
  className,
  tooltip,
  iconClassName,
  size = 'md',
  ...props
}) => (
  <Link
    className={clsx(
      'btn-ghost rounded-full flex items-center p-2 justify-center focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-50',
      SIZE_STYLES[size],
      className
    )}
    {...props}
  >
    <Icon className={clsx('w-full h-full', iconClassName)} />
  </Link>
);

export default IconLink;
