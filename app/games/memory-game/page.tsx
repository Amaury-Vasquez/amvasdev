import { Metadata } from 'next';
import { MemoryGame } from '@/modules';

export const metadata: Metadata = {
  title: 'Memory game | Amaury Vasquez',
  description: 'Memory game created using React, Next.js, and Tailwind CSS.',
};

export default function GamePage() {
  return <MemoryGame />;
}
