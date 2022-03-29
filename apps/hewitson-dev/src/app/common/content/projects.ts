import { Project } from '../interfaces/projects';
import {
  angular,
  cSharp,
  docker,
  firebase,
  graphQL,
  keycloak,
  nestJs,
  sql,
  svelte,
  typescript,
  unity,
} from './tags';

export const projects: Project[] = [
  {
    id: 'dungeon-crawler',
    img: 'assets/projects/dungeon-crawler/dungeon-crawler_header.png',
    mdFile: 'assets/projects/dungeon-crawler/dungeon-crawler.md',
    description:
      'Projector is a project management application designed for small to large teams and using modern technologies from the ground up to improve productivity. Projector uses a fluid responsive UI to make managing your projects easy and intuitive and focuses on the basics to ensure the best quality product.',
    title: 'Dungeon Crawler',
    tags: [cSharp, unity],
    githubLink: 'https://github.com/ExistentialAlex/GamePrototype',
  },
  {
    id: 'projector',
    img: 'assets/projects/projector/projector_header.png',
    mdFile: 'assets/projects/projector/projector.md',
    description:
      'Projector is a project management application designed for small to large teams and using modern technologies from the ground up to improve productivity. Projector uses a fluid responsive UI to make managing your projects easy and intuitive and focuses on the basics to ensure the best quality product.',
    title: 'Projector',
    tags: [angular, typescript, nestJs, graphQL, sql, docker, keycloak],
    githubLink: 'https://github.com/ExistentialAlex/projector',
  },
  {
    id: 'pocus',
    img: 'assets/projects/pocus/pocus_img1.png',
    mdFile: 'assets/projects/pocus/pocus_writeup.md',
    description:
      'Pocus is a pomodoro timer used for time management and encouraging egular breaks from work to ensure productivity. Pocus uses a minimalistic UI to remove distraction and offers basic settings to configure it to your needs.',
    title: 'Pocus',
    tags: [svelte, typescript],
    githubLink: 'https://github.com/ExistentialAlex/pocus',
  },
  {
    id: 'final-year-project',
    img: 'assets/projects/final-year-project/finalYearProjectHeader.png',
    mdFile: 'assets/projects/final-year-project/finalYearProject.md',
    description:
      'My final year project as part of my degree was to create a system by which a user could upload a document and have it scanned through to allow for searching of key phrases. Suffix arrays were used for this due their performative nature',
    title: 'Final Year Project',
    tags: [angular, typescript, firebase],
  },
];
