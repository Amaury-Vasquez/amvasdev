import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Footer from './Footer';
import Header from './Header';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [cookies, setCookie] = useCookies(['theme']);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document
        .querySelector('html')
        ?.setAttribute('data-theme', cookies.theme ?? 'corporate');
    }
  }, [cookies, setCookie]);

  return (
    <>
      <Header />
      <div className="bg-base-200 max-xxs:min-h-xxs-screen max-xxs:mt-28 min-h-content h-fit mt-16">
        {children}
      </div>
      <Footer />
    </>
  );
}
