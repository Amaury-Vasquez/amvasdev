import { Metadata } from 'next';
import { MyWork } from '@/modules';

export const metadata: Metadata = {
  title: 'Amaury Vasquez | My work | Personal projects and web applications',
  description:
    'Amaury Vasquez development work. List of web applications created, developed, and maintained by Amaury Vasquez. Main stack: React, Python, Typescript, FastAPI.',
  alternates: {
    canonical: 'https://amauryvasquez.com/my-work',
  },
};

export default function MyWorkPage() {
  return <MyWork />;
}
