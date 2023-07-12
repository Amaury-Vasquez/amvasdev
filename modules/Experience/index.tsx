import { FC, Fragment } from 'react';
import ExperienceItem from './ExperienceItem';
import { EXPERIENCE } from '@/constants';

const Experience: FC = () => {
  return (
    <main className="flex flex-col min-h-content items-center justify-start w-full py-10 gap-8">
      <h2 className="text-3xl font-semibold text-center">Work experience</h2>
      <div className="grid sm:grid-cols-2 max-w-screen xs:max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-6xl gap-8 md:gap-4">
        {EXPERIENCE.map((experience, idx) => (
          <Fragment key={'experience:' + idx}>
            <ExperienceItem {...experience} alternate={idx % 2 > 0} />
            <span />
          </Fragment>
        ))}
      </div>
      <h2 className="text-3xl font-semibold text-center">Education</h2>
    </main>
  );
};

export default Experience;
