import Head from 'next/head';
import { MyWork } from '@/modules';

export default function MyWorkPage() {
  return (
    <>
      <Head>
        <title>
          Amaury Vasquez | My work | Personal projects and web applications
        </title>
        <meta
          name="description"
          content="Amaury Vasquez development work. List of web applications created, developed, and maintained by Amaury Vasquez. Main stack: React, Python, Typescript, FastAPI."
        />
        <link rel="canonical" href="https://amauryvasquez.com/my-work" />
      </Head>
      <MyWork />
    </>
  );
}
