import { useToggleMenu } from '@amvasdev/usehooks';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { FC, useCallback, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { FaHandPointRight } from 'react-icons/fa';
import { FaCircleCheck } from 'react-icons/fa6';
import { IoOptionsOutline } from 'react-icons/io5';
import { Button } from '@/components';
import { THEME_VARIANTS } from '@/constants';

const COLORS = [
  'bg-base-100',
  'bg-neutral',
  'bg-primary',
  'bg-secondary',
  'bg-accent',
];

const ToggleTheme: FC = () => {
  const [cookies, setCookies] = useCookies(['theme']);
  const ref = useRef<HTMLDivElement>(null);
  const { showMenu, togglePanel, isPanelClosing } = useToggleMenu(ref);
  const pathname = usePathname();

  const handleCookieChange = useCallback(
    (theme: string) => {
      setCookies('theme', theme);
      if (typeof window !== 'undefined')
        document.querySelector('html')?.setAttribute('data-theme', theme);
    },
    [setCookies]
  );

  return (
    <div className="relative" ref={ref}>
      <Button
        className="rounded-md relative"
        variant="neutral"
        onClick={togglePanel}
        name="open-theme-menu"
      >
        {pathname === '/' && (
          <FaHandPointRight className="absolute top-4 text-accent animate-bounce -left-6 text-lg" />
        )}
        <span className="max-xs:hidden">Theme</span>
        <IoOptionsOutline className="w-5 h-5" />
      </Button>
      {showMenu ? (
        <ul
          className={clsx(
            'menu menu-md gap-4 absolute mt-3 animate-to-bottom z-[1] right-0 shadow-lg shadow-base-300 bg-base-100 rounded-box max-xxs:w-64 w-80 p-4 origin-top-right',
            {
              'animate-to-top': isPanelClosing,
            }
          )}
        >
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
      ) : null}
    </div>
  );
};

export default ToggleTheme;
