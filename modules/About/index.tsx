import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { GiMexico } from 'react-icons/gi';
import { SiReact } from 'react-icons/si';
import { SKILLS } from '@/constants';

const About: FC = () => {
  return (
    <main className="flex min-h-content items-start justify-center w-full py-10">
      <div className="max-w-screen xs:max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-6xl grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <article className="flex flex-col gap-4 items-center w-full shadow-md shadow-base-300 rounded-md p-4 h-full justify-center">
          <div className="avatar">
            <figure className="w-40 rounded-full block aspect-square overflow-hidden ring-2 ring-primary ring-offset-base-300 ring-offset-2">
              <Image
                alt="Amaury Vasquez pic"
                src="https://i.imgur.com/TvPavKp.jpg"
                height={636}
                width={636}
                priority
              />
            </figure>
          </div>
          <h1 className="xxs:text-xl xs:text-3xl md:text-2xl font-semibold max-w-full">
            Amaury Vasquez
          </h1>
          <p className="flex w-full gap-1">
            <strong className="font-medium">Age: </strong> 24 years
          </p>
          <p className="flex w-full gap-1 items-center">
            <strong className="font-medium">Country: </strong> Mexico
            <GiMexico className="w-5 h-5 text-green-700" />
          </p>
          <p className="flex w-full gap-1 items-center">
            <strong className="font-medium">Position: </strong> Frontend
            developer at{' '}
            <Link className="text-primary" href="https://ballastlane.com">
              Ballast Lane Applications LLC
            </Link>
          </p>
          <p className="flex w-full gap-1 items-center">
            <strong className="font-medium">Specialty: </strong>
            React <SiReact className="w-5 h-5 text-blue-500" />
          </p>
          <p className="flex w-full gap-1 items-center flex-wrap">
            <strong className="font-medium">Languages: </strong>
            <span className="flex gap-1">English (C1)</span>
            <span className="flex gap-1">Spanish (Native)</span>
          </p>
          <p className="flex w-full gap-1 flex-wrap">
            <strong className="font-medium">Hobbies: </strong> Soccer ⚽ Chess
            ♟️ Gaming 🎮
          </p>
        </article>
        <article className="flex flex-col gap-4 items-center w-full shadow-md shadow-base-300 rounded-md h-full p-4 lg:col-span-2">
          <h2 className="text-2xl font-medium w-full"> Skills </h2>
          <p>
            {`As a skilled professional focused on frontend development, my expertise shines in React and TypeScript. 
              With extensive experience in these technologies, I excel at crafting exceptional user interfaces and delivering
              seamless user experiences.`}
            <br />
            <br />
            {`I possess an in-depth understanding of React's component-based architecture, state management, and reusable UI 
              patterns, thus allowing me to create dynamic and visually appealing web applications that meet and exceed user expectations.`}
            <br />
            <br />
            In addition to my frontend proficiency, I possess a solid foundation
            in Python, FastAPI, and SQL, which allows me to effectively
            collaborate with backend developers and seamlessly integrate
            frontend functionalities.
          </p>
          <h3 className="text-xl font-medium w-full"> Tech stack </h3>
          <div className="flex w-full flex-wrap gap-2">
            {SKILLS.map(({ name, Icon }, idx) => (
              <span
                className="flex rounded-md py-2 px-4 font-medium bg-base-300 text-primary gap-2 items-center"
                key={'aboutskill:' + name + idx}
              >
                {name}
                <Icon className="w-5 h-5" />
              </span>
            ))}
          </div>
        </article>
        <article className="flex flex-col gap-4 items-center w-full shadow-md shadow-base-300 rounded-md h-full p-4 md:col-span-2 lg:col-span-3">
          <h2 className="text-2xl font-medium w-full">About me</h2>
          <p>
            My mindset is rooted in the Japanese principles of ikigai and
            kaizen. Ikigai guides me to find purpose and meaning in life by
            aligning my passions, values, skills, and world needs. It encourages
            me to pursue activities that bring joy, fulfillment, and a sense of
            contribution. Kaizen, on the other hand, is a philosophy of
            continuous improvement. It inspires me to make small, incremental
            changes in my life to achieve long-term growth and excellence.
            <br />
            <br />
            By embracing these philosophies, I prioritize self-reflection,
            personal growth, and the pursuit of balance and harmony. Through the
            combination of ikigai and kaizen, I nurture a mindset that
            constantly seeks purposeful progress and embraces the journey of
            self-discovery and improvement.
          </p>
        </article>
      </div>
    </main>
  );
};

export default About;