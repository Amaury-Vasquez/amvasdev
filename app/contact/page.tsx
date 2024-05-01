import { Metadata } from 'next';
import Contact from '@/modules/Contact';

export const metadata: Metadata = {
  title: 'Amaury Vasquez | Contact section',
  description:
    'Amaury Vasquez | Contact section | React frontend developer | Software Enginner',
  alternates: {
    canonical: 'https://amauryvasquez.com/contact',
  },
};

export default function ContactPage() {
  return <Contact />;
}
