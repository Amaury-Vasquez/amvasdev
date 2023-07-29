import clsx from 'clsx';
import { FC } from 'react';
import { MdMenu } from 'react-icons/md';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useToggle, useOnClickOutside } from '@/hooks';
import { IconButton } from '@/components';
import { PAGE_LINKS } from '@/constants';

const Menu: FC = () => {
  const { isActive, toggle, deactivate } = useToggle(false);
  const ref = useOnClickOutside<HTMLDivElement>(deactivate);
  const { pathname } = useRouter();

  return (
    <div className="dropdown" ref={ref}>
      <IconButton
        Icon={MdMenu}
        className="btn btn-ghost btn-circle hover:text-primary focusable-base"
        onClick={toggle}
      />
      {isActive && (
        <ul className="menu menu-sm absolute mt-3 z-[1] p-2 shadow-lg shadow-base-300 bg-base-100 rounded-box w-52">
          {PAGE_LINKS.map(({ name, url }, idx) => {
            const disabledPath = url === pathname;
            return (
              <li
                className={clsx(
                  'py-1',
                  disabledPath && 'disabled !cursor-text'
                )}
                key={'headernavbarlink:' + idx}
              >
                {disabledPath ? (
                  <span className="font-semibold"> {name} </span>
                ) : (
                  <Link
                    className="hover:text-primary font-semibold"
                    onClick={deactivate}
                    href={url}
                  >
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Menu;
