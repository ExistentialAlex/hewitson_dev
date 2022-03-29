import { Feedback, WorkHistory } from '../interfaces/about';
import {
  angular,
  cSharp,
  dataminer,
  docker,
  git,
  gitlab,
  java,
  python,
  sql,
  typescript,
} from './tags';

export const workHistory: WorkHistory[] = [
  // {
  //   company: 'The Boars',
  //   url: 'https://www.theboars.co.uk/',
  //   roles: [
  //     {
  //       startDate: 1464739200000,
  //       endDate: 1491004800000,
  //       description:
  //         'While at The Boars, I worked both in the kitchens and front of house, as a waiter and barman. I additionally provided holiday cover for the bar manager; which also necessitated cellar work, placing orders and receiving deliveries. <br><br> Through this experience I have learned to operate effectively within a team, understanding the benefits of clear communication and the importance of delivering consistently good customer service within a pressured, time critical environment.',
  //       title: 'Waiter',
  //       tags: [],
  //     },
  //   ],
  // },
  // {
  //   company: 'Besthorpe Farm Shop',
  //   url: 'https://www.yell.com/biz/besthorpe-farm-shop-attleborough-6234268/',
  //   roles: [
  //     {
  //       startDate: 1330560000000,
  //       endDate: 1441065600000,
  //       description:
  //         'I worked at Besthorpe Farm Shop at the weekends and during holidays throughout my GCSE and A-Level studies. My work principally involved serving customers, re-stocking shelves, assisting customers with their purchases. But I was additionally involved in infrastructure improvements, building fences, erecting polytunnels and constructing tables. <br><br> Juggling the demands of my studies with this part-time work helped me to become more organised, particularly in my time management. Through this customer facing role I have developed my inter-personal skills and customer relations.',
  //       title: 'Sales Assistant',
  //       tags: [],
  //     },
  //   ],
  // },
  {
    company: 'CGI',
    url: 'https://www.cgi.com/en',
    roles: [
      {
        startDate: 1592179200000,
        description: `As a Software Developer on OneWeb, I am the development lead involved in developing key features of the NM subsystem. I've worked alongside key stakeholders from both CGI and the client to ensure the highest quality product was being produced and delivered efficiently.
        
        I introduced best practices within the development team by streamlining processes and maintaining the team’s git repository.

        I was an advocate for the transition to agile working, ensuring that best practices being introduced by upper management were adhered to within the development team. Additionally, I spearheaded the transition to a better suite of tools used for development which ensures better quality and higher efficiency within the team.

        I am the go-to member when issues arise and covers for key management figures when needed. I regularly perform deployments to the client’s pre-production and production environments and was involved in troubleshooting live incidents that arose from either of these systems.`,
        title: 'Lead Software Engineer',
        tags: [cSharp, python, dataminer, gitlab, git],
      },
      {
        startDate: 1571097600000,
        endDate: 1592179200000,
        description: `As a Software Developer on INVISON, I was involved in the development of a key work package for the client; creating a configurable UI that the client would use in their own development.

          I worked alongside the Design Authority to single-handedly implement this system from the ground up, whilst also working to configure the project and maintain key deliverables as development progressed. The project involved supporting authentication and containerisation for scaling across multiple systems.
          
          I was also heavily involved in FAT demonstrations to the client; demonstrating key features of the entire project to the client and responding to feedback.`,
        title: 'Software Engineer',
        tags: [angular, typescript, docker, git],
      },
      {
        title: 'Graduate Software Engineer',
        tags: [java, sql],
        startDate: 1563148800000,
        endDate: 1592179200000,
        description: `As a Technical Graduate on OneSatPlan, I was involved in the development, integration and acceptance testing of several work packages.
        
        I also worked alongside the Design Authority in requirements capture, estimates and design on a work package to gain
        insight into the design approaches used on the team.
        
        Additionally, I helped maintain the project server, database and wiki, contributed to the Controlling Specification of the
        project and was involved in demonstrations and key meetings with the client to discuss the project.`,
      },
      {
        startDate: 1498867200000,
        endDate: 1535760000000,
        description: `I worked at CGI during my industrial placement at university, demonstrating and developing my skills as a software developer and test analyst. I was involved in developing new software, manual and automated testing, and the identification and removal of software bugs in code. 
        
        I also regularly liaised with our client through demonstration work and discussions.
           
        Through my experience at CGI, I developed my analytical and time management skills allowing me to more effectively test the software we were developing, and build upon the skills I had learned at university through my development work.`,
        title: 'Software Developer and Test Analyst',
        tags: [java],
      },
    ],
  },
];

export const feedback: Feedback[] = [
  {
    from: 'CGI Member',
    feedback:
      "Alex joined the project and was immediately invested, jumping into a complex new system and programming language. Alex always brings a smile to the team and confidently leads development of our subsystem. Whenever surprise deadlines or bugs arise, he is level headed, and quick to address the issues at their root. Alex has suggested and implemented plenty of best practices to improve our workflow and the quality of our deliverables. In meetings, he isn't afraid to take the lead and break the ice to make people feel welcome. Throughout his work, Alex demonstrates quality, efficiency and positivity.",
  },
];
