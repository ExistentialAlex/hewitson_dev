export interface WorkHistory {
  title: string;
  dates: number[];
  company: string;
  description: string;
  url: string;
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
