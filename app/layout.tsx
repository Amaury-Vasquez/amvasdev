import { cookies } from 'next/headers';
import AppLayout from '@/layout';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStorage = cookies();

  return (
    <html lang="en" data-theme={cookieStorage.get('theme')}>
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
