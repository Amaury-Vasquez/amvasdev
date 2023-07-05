import Image from 'next/image';
import { FC } from 'react';
import { Link } from '@/components';
import { Project } from '@/interfaces';

interface WorkCardProps extends Project {}

// disable-next-no-img-element
const WorkCard: FC<WorkCardProps> = ({
  name,
  description,
  Stack,
  website,
  github,
  image,
}) => (
  <div className="card bg-base-100 bg-opacity-70 shadow-xl relative h-full w-full rounded-xl">
    <figure className="w-full absolute h-full opacity-5 rounded-xl z-0">
      <Image className="w-full aspect-square" src={image} alt={name} fill />
    </figure>
    <div className="card-body col-span-3 relative space-y-2 z-max">
      <h2 className="card-title">{name}</h2>
      <p>{description}</p>
      <span className="font-semibold flex h-fit w-full max-w-full justify-start gap-4 items-center">
        Stack:
        {Stack.map((Icon, idx) => (
          <Icon className="w-6 h-6" key={name + 'stack:' + idx} />
        ))}
      </span>
      {website && (
        <Link href={website} variant="primary" target="_blank">
          Website
        </Link>
      )}
      {github && (
        <Link href={github} variant="accent" target="_blank">
          Github
        </Link>
      )}
    </div>
  </div>
);

export default WorkCard;
