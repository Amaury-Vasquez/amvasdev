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
import { Skill } from '../interfaces/skill';

export const SKILLS: Skill[] = [
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
