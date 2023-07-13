import clsx from 'clsx';
import { FC } from 'react';
import { MdWorkOutline } from 'react-icons/md';

export interface ExperienceItemProps {
  role: string;
  company: string;
  date: string;
  alternate?: boolean;
}

const ExperienceItem: FC<ExperienceItemProps> = ({
  role,
  company,
  date,
  alternate,
}) => {
  const Work = (
    <span className="h-full flex items-center justify-center">
      <MdWorkOutline className="w-16 h-16 text-secondary" />
    </span>
  );

  return (
    <div
      className={clsx(
        'w-full flex gap-4 p-6 items-center shadow-sm rounded-md bg-base-100',
        alternate ? 'sm:col-start-2' : 'sm:col-start-1'
      )}
    >
      {!alternate ? Work : null}
      <article className="flex flex-col gap-4 w-fit">
        <h2 className="text-primary font-semibold">{company}</h2>
        <h3 className="text-secondary font-semibold">{role}</h3>
        <p>{date}</p>
      </article>
      {alternate ? Work : null}
    </div>
  );
};

export default ExperienceItem;
