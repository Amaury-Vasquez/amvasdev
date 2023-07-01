import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import AppLayout from '@/layout/';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <div className={montserrat.className}>
        <Component {...pageProps} />
      </div>
    </AppLayout>
  );
}
