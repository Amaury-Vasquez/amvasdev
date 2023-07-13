import { FC } from 'react';
import { SiPlatzi } from 'react-icons/si';
import ExperienceItem from './ExperienceItem';
import { Link } from '@/components';
import { EXPERIENCE, EDUCATION } from '@/constants';

const Experience: FC = () => {
  const subtitle = (text: string) => (
    <h2 className="text-3xl p-4 font-bold text-center sm:col-span-2">{text}</h2>
  );

  return (
    <main className="flex flex-col min-h-content items-center justify-start w-full py-10 gap-8">
      <div className="grid sm:grid-cols-2 max-w-screen xs:max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-6xl gap-8 md:gap-6">
        {subtitle('Work experience')}
        {EXPERIENCE.map((experience, idx) => (
          <ExperienceItem
            key={'experience:' + idx}
            {...experience}
            alternate={idx % 2 > 0}
          />
        ))}
      </div>
      <article className="flex flex-col gap-4 w-fit px-6">
        {subtitle('Education')}
        <ul className="space-y-2">
          {EDUCATION.map((text, idx) => (
            <li
              key={text + idx}
              className="text-lg font-semibold text-secondary"
            >
              {`- ${text}`}
            </li>
          ))}
        </ul>
      </article>
      <article className="flex flex-col gap-4 w-fit whitespace-nowrap px-6">
        {subtitle('Certificates')}
        <Link
          className="text-lg no-underline"
          href="https://platzi.com/p/amauryvasquez/"
          variant="neutral"
          target="_blank"
        >
          <SiPlatzi className="w-6 h-6 inline-block text-green-500" />
          Platzi
        </Link>
      </article>
    </main>
  );
};

export default Experience;
