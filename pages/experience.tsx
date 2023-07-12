import Head from 'next/head';
import { Experience } from '@/modules';

export default function ExperiencePage() {
  return (
    <>
      <Head>
        <title> Amaury Vasquez - Work Experience</title>
        <meta
          name="description"
          content="Amaury Vasquez - Work Experience. React frontend developer."
        />
        <link rel="canonical" href="https://amauryvasquez.com/experience" />
      </Head>
      <Experience />
    </>
  );
}
