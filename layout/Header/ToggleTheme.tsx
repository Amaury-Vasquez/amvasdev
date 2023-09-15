import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useCookies } from 'react-cookie';
import { FaHandPointRight } from 'react-icons/fa';
import { FaCircleCheck } from 'react-icons/fa6';
import { IoOptionsOutline } from 'react-icons/io5';
import { Button } from '@/components';
import { THEME_VARIANTS } from '@/constants';
import { useToggle, useOnClickOutside } from '@/hooks';

const COLORS = [
  'bg-base-100',
  'bg-neutral',
  'bg-primary',
  'bg-secondary',
  'bg-accent',
];

const ToggleTheme: FC = () => {
  const [cookies, setCookies] = useCookies(['theme']);
  const { isActive, toggle, deactivate } = useToggle(false);
  const ref = useOnClickOutside<HTMLDivElement>(deactivate);
  const router = useRouter();
  const handleCookieChange = (theme: string) => {
    setCookies('theme', theme);
  };

  return (
    <div className="dropdown" ref={ref}>
      <Button
        className="rounded-md relative"
        variant="neutral"
        onClick={toggle}
        name="open-theme-menu"
      >
        {router.pathname === '/' && (
          <FaHandPointRight className="absolute top-4 text-accent animate-bounce -left-6 text-lg" />
        )}
        <span className="max-xs:hidden">Theme</span>
        <IoOptionsOutline className="w-5 h-5" />
      </Button>
      {isActive && (
        <ul className="menu menu-md gap-4 absolute mt-3 z-[1] right-0 shadow-lg shadow-base-300 bg-base-100 rounded-box max-xxs:w-64 w-80 p-4">
          {THEME_VARIANTS.map((theme, idx) => (
            <li key={theme + idx}>
              <button
                className="flex justify-between bg-base-200 text-primary"
                data-theme={theme}
                onClick={() => handleCookieChange(theme)}
                name={`${theme}-theme`}
              >
                <span className="flex items-center gap-2">
                  {cookies.theme === theme && (
                    <FaCircleCheck className="w-4 h-4" />
                  )}
                  {theme}
                </span>
                {COLORS.map((color, idx) => (
                  <span
                    key={color + idx}
                    className={clsx(color, 'w-4 h-4 rounded-full')}
                  />
                ))}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToggleTheme;
