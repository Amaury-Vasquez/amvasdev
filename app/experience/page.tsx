import { Metadata } from 'next';
import { Experience } from '@/modules';

export const metadata: Metadata = {
  title: 'Amaury Vasquez | Work Experience',
  description: 'Amaury Vasquez - Work Experience. Frontend developer.',
  alternates: {
    canonical: 'https://amauryvasquez.com/experience',
  },
};

export default function ExperiencePage() {
  return <Experience />;
}
