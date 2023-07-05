import { FC } from 'react';
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiRollupdotjs,
  SiNpm,
  SiDaisyui,
  SiPython,
  SiFastapi,
  SiPostgresql,
} from 'react-icons/si';
import { Project } from '@/interfaces';
import WorkCard from './WorkCard';

const MY_PROJECTS: Project[] = [
  {
    name: 'Amvas Games',
    description: 'Collection of games created by Amaury Vasquez.',
    Stack: [SiReact, SiNextdotjs, SiTailwindcss],
    image: 'https://i.imgur.com/ZPIRzDJ.jpg',
    website: 'https://amvasgames.com',
    github: 'https://github.com/Amaury-Vasquez/amvas-games',
  },
  {
    name: 'Pokedex',
    description: 'Simulation of the Pokedex from the Pokemon series.',
    Stack: [SiReact, SiNextdotjs, SiTailwindcss],
    image: 'https://i.imgur.com/UYQhEzt.jpg',
    website: 'https://amvasgames.com',
    github: 'https://github.com/Amaury-Vasquez/amvas-games',
  },
  {
    name: 'Facile ui',
    description: 'React UI library.',
    Stack: [SiReact, SiRollupdotjs, SiNpm, SiTailwindcss],
    image: 'https://i.imgur.com/UYQhEzt.jpg',
    website: 'https://amvasgames.com',
    github: 'https://github.com/Amaury-Vasquez/facile-ui',
  },
  {
    name: 'FLineup',
    description:
      'Website application. Create and manage your own football team.',
    Stack: [
      SiReact,
      SiNextdotjs,
      SiTailwindcss,
      SiPython,
      SiFastapi,
      SiPostgresql,
    ],
    image: 'https://i.imgur.com/fYHduDp.jpg',
    website: 'https://amvasgames.com',
    github: 'https://github.com/Amaury-Vasquez/flineup',
  },
  {
    name: 'Facile ui',
    description: 'React UI library.',
    Stack: [SiReact, SiRollupdotjs, SiNpm, SiTailwindcss, SiDaisyui],
    image: 'https://i.imgur.com/UYQhEzt.jpg',
    website: 'https://amvasgames.com',
    github: 'https://github.com/Amaury-Vasquez/facile-ui',
  },
  {
    name: 'FLineup',
    description:
      'Website application. Create and manage your own football team.',
    Stack: [
      SiReact,
      SiNextdotjs,
      SiTailwindcss,
      SiPython,
      SiFastapi,
      SiPostgresql,
    ],
    image: 'https://i.imgur.com/eOKANkP.jpg',
    website: 'https://amvasgames.com',
    github: 'https://github.com/Amaury-Vasquez/flineup',
  },
  {
    name: 'Facile ui',
    description: 'React UI library.',
    Stack: [SiReact, SiRollupdotjs, SiNpm, SiTailwindcss],
    image: 'https://i.imgur.com/UYQhEzt.jpg',
    website: 'https://amvasgames.com',
    github: 'https://github.com/Amaury-Vasquez/facile-ui',
  },
  {
    name: 'FLineup',
    description:
      'Website application. Create and manage your own football team.',
    Stack: [
      SiReact,
      SiNextdotjs,
      SiTailwindcss,
      SiPython,
      SiFastapi,
      SiPostgresql,
    ],
    image: 'https://i.imgur.com/eOKANkP.jpg',
    website: 'https://amvasgames.com',
    github: 'https://github.com/Amaury-Vasquez/flineup',
  },
];

const MyWork: FC = () => {
  return (
    <main className="p-4 sm:p-8">
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
};

export default MyWork;
