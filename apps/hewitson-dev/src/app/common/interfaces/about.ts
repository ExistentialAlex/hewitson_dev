import { Tag } from './projects';

export interface WorkHistory {
  title: string;
  dates: number[];
  company: string;
  description: string;
  url: string;
  tags?: Tag[];
}

export interface Skill {
  skill: string;
  description: string;
  open: boolean;
}

export interface Feedback {
  from: string;
  feedback: string;
}
