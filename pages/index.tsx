import Head from 'next/head';
import { FaLinux } from 'react-icons/fa';
import { MdOutlineTerminal } from 'react-icons/md';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiCss3,
  SiTailwindcss,
  SiWebpack,
  SiPython,
  SiPostgresql,
  SiFastapi,
  SiExpress,
} from 'react-icons/si';
import { Link, MultipleTypeWriter } from '@/components';
import { PAGE_LINKS } from '@/constants';
import { Skill } from '@/interfaces';

const TypeWriterContents: Skill[] = [
  {
    name: 'React',
    Icon: SiReact,
  },
  {
    name: 'JavaScript',
    Icon: SiJavascript,
  },
  {
    name: 'TypeScript',
    Icon: SiTypescript,
  },
  {
    name: 'NextJS',
    Icon: SiNextdotjs,
  },
  {
    name: 'css',
    Icon: SiCss3,
  },
  {
    name: 'TailwindCSS',
    Icon: SiTailwindcss,
  },
  {
    name: 'Webpack',
    Icon: SiWebpack,
  },
  {
    name: 'Python',
    Icon: SiPython,
  },
  {
    name: 'PostgreSQL',
    Icon: SiPostgresql,
  },
  {
    name: 'FastAPI',
    Icon: SiFastapi,
  },
  {
    name: 'Express',
    Icon: SiExpress,
  },
  {
    name: 'Linux',
    Icon: FaLinux,
  },
  {
    name: 'CLI',
    Icon: MdOutlineTerminal,
  },
];

export default function Home() {
  const contents = TypeWriterContents.map(({ name, Icon }, idx) => (
    <span className="flex items-center gap-2" key={'typewritericon:' + idx}>
      {`${name} `}
      <span className="w-fit h-fit">
        {<Icon className="transition-all w-8 h-8" />}
      </span>
    </span>
  ));

  return (
    <>
      <Head>
        <title> Amaury Vasquez | Web developer</title>
        <meta
          name="description"
          content="Crafting Digital Experiences with Cutting-Edge Programming Wizardry,
          Amaury Vasquez personal website. Web developer."
        />
      </Head>
      <main>
        <div className="hero min-h-content">
          <div className="hero-content max-w-screen px-4 text-center">
            <article className="max-w-screen xs:max-w-md md:max-w-3xl lg:max-w-4xl flex flex-col gap-8">
              <h1 className="xxs:text-xl xs:text-3xl md:text-5xl font-bold max-w-full">
                Crafting Digital Experiences with Cutting-Edge Programming
                Wizardry
              </h1>
              <p>
                Step into the world of captivating digital experiences; welcome
                to my portfolio. I am a web developer with technical prowess and
                a keen eye for aesthetics. With a focus on user-centric design
                and a deep understanding of the latest web development
                technologies, I bring websites and applications to life.
              </p>
              <span className="flex w-full justify-center items-center">
                <MultipleTypeWriter contents={contents} />
              </span>
              <div className="grid grid-cols-2 md:flex justify-center gap-4">
                {PAGE_LINKS.slice(1).map(({ name, url, variant }, idx) => (
                  <Link key={'home-link:' + idx} href={url} variant={variant}>
                    {name}
                  </Link>
                ))}
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
