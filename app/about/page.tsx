import { Metadata } from 'next';
import { About } from '@/modules';

export const metadata: Metadata = {
  title: 'Amaury Vasquez | About | Developer name: Amaury Vasquez',
  description:
    'Developer name: Amaury Vasquez. Main stack: React, Python, Typescript, FastAPI. Extra info: Chess player, Soccer enthusiast.',
  alternates: {
    canonical: 'https://amauryvasquez.com/about',
  },
};

export default function AboutPage() {
  return <About />;
}
