import Head from 'next/head';
import { About } from '@/modules';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Amaury Vasquez | About </title>
        <meta
          name="description"
          content="Developer name: Amaury Vasquez. Main stack: React, Python, Typescript, FastAPI. Extra info: Chess player, Soccer enthusiast."
        />
        <link rel="canonical" href="https://amauryvasquez.com/about" />
      </Head>
      <About />
    </>
  );
}
