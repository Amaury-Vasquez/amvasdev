import { Metadata } from 'next';
import { TbError404 } from 'react-icons/tb';
import { Link } from '@/components';
import { PAGE_LINKS } from '@/constants';

export const metadata: Metadata = {
  title: 'Amaury Vasquez | Page not found',
  description: 'This page does not exist. Please check the URL and try again.',
  alternates: {
    canonical: 'https://amauryvasquez.com/404',
  },
};

export default function NotFound() {
  return (
    <main className="hero min-h-content animate-fadeIn">
      <div className="hero-content max-w-screen px-4 text-center">
        <article className="max-w-screen xs:max-w-md md:max-w-3xl lg:max-w-4xl flex flex-col gap-8">
          <TbError404 className="m-auto text-9xl" />
          <h1 className="xxs:text-xl xs:text-3xl md:text-5xl font-bold max-w-full">
            This page does not exist!
          </h1>
          <p>
            Look like you&apos;ve followed a broken link or entered a URL that
            doesn&apos;t exists on this site. Check the links below to find what
            you&apos;re looking for and getting inmersed in my portfolio.
          </p>
          <div className="grid grid-cols-2 md:flex justify-center gap-4">
            {PAGE_LINKS.map(({ name, url, variant }, idx) => (
              <Link key={'home-link:' + idx} href={url} variant={variant}>
                {name}
              </Link>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
