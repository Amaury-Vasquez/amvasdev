import { Metadata } from 'next';
import Head from 'next/head';
import { Link, MultipleTypeWriter } from '@/components';
import { PAGE_LINKS, SKILLS } from '@/constants';

export const metadata: Metadata = {
  title: 'Amaury Vasquez | Web developer',
  description:
    'Crafting Digital Experiences with Cutting-Edge Programming Wizardry, Amaury Vasquez personal website. Web developer.',
  alternates: {
    canonical: 'https://amauryvasquez.com/',
  },
};

export default function Home() {
  const contents = SKILLS.map(({ name, Icon }, idx) => (
    <span
      className="flex items-center gap-2 w-fit"
      key={'typewritericon:' + idx}
    >
      <span className="w-fit h-fit">
        {<Icon className="transition-all w-8 h-8" />}
      </span>
      {`${name} `}
    </span>
  ));

  return (
    <main className="hero min-h-content animate-fadeIn">
      <div className="hero-content max-w-screen px-4 text-center">
        <article className="max-w-screen xs:max-w-md md:max-w-3xl lg:max-w-4xl flex flex-col gap-8">
          <h1 className="xxs:text-xl xs:text-3xl md:text-5xl font-bold max-w-full">
            Crafting Digital Experiences with Cutting-Edge Programming Wizardry
          </h1>
          <p>
            Step into the world of captivating digital experiences; welcome to
            my portfolio. I am a web developer with technical prowess and a keen
            eye for aesthetics. With a focus on user-centric design and a deep
            understanding of the latest web development technologies, I bring
            websites and applications to life.
          </p>
          <span className="flex w-full justify-center items-center">
            <MultipleTypeWriter contents={contents} />
          </span>
          <div className="grid grid-cols-2 md:flex justify-center gap-4">
            {PAGE_LINKS.slice(1).map(({ name, url, variant }, idx) => (
              <Link
                key={'home-link:' + idx}
                href={url}
                variant={variant}
                aria-label={name}
              >
                {name}
              </Link>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
