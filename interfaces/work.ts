import { IconType } from 'react-icons';

export interface Project {
  name: string;
  description: string;
  Stack: IconType[];
  image: string;
  website?: string;
  github?: string;
}
