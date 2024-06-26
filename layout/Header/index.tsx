import { FC } from 'react';
import Menu from './Menu';
import ToggleTheme from './ToggleTheme';
import { Link } from '@/components';

const Header: FC = () => (
  <header className="navbar bg-base-100 justify-between max-xxs:grid max-xxs:grid-rows-2 max-xxs:grid-cols-2 fixed top-0 z-50">
    <Menu />
    <Link
      href="/"
      variant="ghost"
      className="normal-case text-xl max-xxs:row-start-1 max-xxs:col-span-2"
      aria-label="home"
    >
      Amaury Vasquez
    </Link>
    <div className="max-xxs:w-full max-xxs:flex max-xxs:justify-end">
      <ToggleTheme />
    </div>
  </header>
);

export default Header;
