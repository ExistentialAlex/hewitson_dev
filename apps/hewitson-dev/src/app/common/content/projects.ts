import { map } from 'rxjs/operators';
import { Project } from '../interfaces/projects';

export const projects: Project[] = [
  {
    id: 'final-year-project',
    img: 'assets/projects/final-year-project/finalYearProjectHeader.png',
    mdFile: 'assets/markdown/final-year-project/finalYearProject.md',
    description:
      'My final year project as part of my degree was to create a system by which a user could upload a document and have it scanned through to allow for searching of key phrases. Suffix arrays were used for this due their performative nature',
    title: 'Final Year Project',
  },
];
