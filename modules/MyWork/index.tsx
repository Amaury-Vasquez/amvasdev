import { FC } from 'react';
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  // SiRollupdotjs,
  // SiNpm,
  SiDaisyui,
  SiStorybook,
  // SiPython,
  // SiFastapi,
  // SiPostgresql,
} from 'react-icons/si';
import WorkCard from './WorkCard';
import { Project } from '@/interfaces';

const MY_PROJECTS: Project[] = [
  {
    name: 'Amvas Games',
    description: 'Collection of games created by Amaury Vasquez.',
    Stack: [SiReact, SiNextdotjs, SiTailwindcss],
    image: 'https://i.imgur.com/ZPIRzDJ.jpg',
    website: 'https://games.amauryvasquez.com',
    github: 'https://github.com/Amaury-Vasquez/amvas-games',
  },
  {
    name: 'Nextjs daisyui starter',
    description: 'Template for Nextjs projects using daisyui.',
    Stack: [SiReact, SiTailwindcss, SiDaisyui, SiStorybook, SiNextdotjs],
    image: 'https://i.imgur.com/JAZ1KNk.png',
    website: 'https://www.chromatic.com/library?appId=64b9d882cec62379d5d90d0f',
    github: 'https://github.com/Amaury-Vasquez/next-daisyui-starter.git',
  },
];

const MyWork: FC = () => (
  <main className="p-4 sm:p-8 animate-fadeIn">
    <article className="">
      <h1 className="text-2xl font-semibold px-2"> Websites </h1>
      <div className="divider mt-1" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {MY_PROJECTS.map((project, idx) => (
          <WorkCard key={idx} {...project} />
        ))}
      </div>
    </article>
  </main>
);

export default MyWork;
