import { FC } from 'react';
import { MdMenu } from 'react-icons/md';
import Link from 'next/link';
import { useToggle, useOnClickOutside } from '@/hooks';
import { IconButton } from '@/components';
import { PAGE_LINKS } from '@/constants';

const Menu: FC = () => {
  const { isActive, toggle, deactivate } = useToggle(false);
  const ref = useOnClickOutside<HTMLDivElement>(deactivate);

  return (
    <div className="dropdown" ref={ref}>
      <IconButton
        Icon={MdMenu}
        className="btn btn-ghost btn-circle hover:text-primary focusable-base"
        onClick={toggle}
      />
      {isActive && (
        <ul className="menu menu-sm absolute mt-3 z-[1] p-2 shadow-lg shadow-base-300 bg-base-100 rounded-box w-52">
          {PAGE_LINKS.map(({ name, url }, idx) => (
            <li className="py-1" key={'headernavbarlink:' + idx}>
              <Link className="hover:text-primary font-semibold" href={url}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
