import { Tag } from './projects';

export interface WorkHistory {
  company: string;
  url: string;
  roles: Role[];
}

export interface Role {
  title: string;
  startDate: number;
  endDate?: number;
  description: string;
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

export interface Education {
  school: string;
  startDate: number;
  endDate: number;
  qualifications: string[];
  levelsAchieved: string[];
}
