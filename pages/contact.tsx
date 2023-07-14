import Head from 'next/head';
import Contact from '@/modules/Contact';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title> Amaury Vasquez | Contact section</title>
        <meta
          name="description"
          content="Amaury Vasquez | Contact section | React frontend developer | Software Enginner"
        />
        <link rel="canonical" href="https://amauryvasquez.com/contact" />
      </Head>
      <Contact />
    </>
  );
}
