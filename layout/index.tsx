import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { MdOutlineNavigateNext } from 'react-icons/md';
import Footer from './Footer';
import Header from './Header';
import { IconLink } from '@/components';
import { PAGE_LINKS } from '@/constants';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [cookies, setCookie] = useCookies(['theme']);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document
        .querySelector('html')
        ?.setAttribute('data-theme', cookies.theme ?? 'dracula');
      if (!cookies.theme) setCookie('theme', 'dracula');
    }
  }, [cookies, setCookie]);

  const currentPathIndex = PAGE_LINKS.findIndex(
    (link) => link.url === router.pathname
  );

  return (
    <>
      <Header />
      {router.pathname !== '/' &&
        currentPathIndex !== -1 &&
        currentPathIndex && (
          <IconLink
            href={
              currentPathIndex + 1 < PAGE_LINKS.length
                ? PAGE_LINKS[currentPathIndex + 1].url
                : '/'
            }
            Icon={MdOutlineNavigateNext}
            className="fixed lg:top-1/2 right-2 z-50 text-primary lg:w-12 lg:h-12 w-10 h-10 xxs:top-[72px] top-2 bg-base-200 xs:top-20 xxs:bg-base-100 duration-1000"
          />
        )}
      <div className="bg-base-200 max-xxs:min-h-xxs-screen max-xxs:mt-28 min-h-content h-fit mt-16">
        {children}
      </div>
      <Footer />
    </>
  );
}
