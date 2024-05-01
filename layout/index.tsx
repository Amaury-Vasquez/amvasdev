'use client';
import { usePathname } from 'next/navigation';
import { MdOutlineNavigateNext } from 'react-icons/md';
import Footer from './Footer';
import Header from './Header';
import { IconLink } from '@/components';
import { PAGE_LINKS } from '@/constants';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const currentPathIndex = PAGE_LINKS.findIndex(
    (link) => link.url === pathname
  );
  const nextPath =
    currentPathIndex + 1 < PAGE_LINKS.length
      ? PAGE_LINKS[currentPathIndex + 1].url
      : '/';
  const ariaLabel =
    nextPath === '/' ? 'home' : PAGE_LINKS[currentPathIndex + 1].name;

  return (
    <>
      <Header />
      {pathname !== '/' && currentPathIndex !== -1 && currentPathIndex && (
        <IconLink
          href={nextPath}
          Icon={MdOutlineNavigateNext}
          aria-label={ariaLabel}
          className="fixed lg:top-1/2 right-2 z-40 text-primary lg:w-12 lg:h-12 w-10 h-10 xxs:top-[72px] top-2 bg-base-200 xs:top-20 xxs:bg-base-100 duration-1000"
        />
      )}
      <div className="max-xxs:min-h-xxs-screen max-xxs:mt-28 bg-base-200 min-h-content h-fit mt-16">
        {children}
      </div>
      <Footer />
    </>
  );
}
