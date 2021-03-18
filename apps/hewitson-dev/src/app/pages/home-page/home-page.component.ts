import { Component, OnInit } from '@angular/core';
import { Project } from '../../common/interfaces/projects';
import { SocialLink } from '../../common/interfaces/links';
import { name, job, email, image } from '../../../assets/strings/business-card';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { projects } from '../../common/content/projects';

@Component({
  selector: 'hewitson-dev-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public projects: Project[];
  public image: string;
  public name: string;
  public email: string;
  public job: string;
  public socialLinks: SocialLink[];

  constructor() {
    this.projects = projects;
    this.name = name;
    this.email = email;
    this.job = job;
    this.image = image;
    this.socialLinks = [
      {
        icon: faGithub,
        url: 'https://github.com/ExistentialAlex/hewitson_dev',
      },
      {
        icon: faLinkedin,
        url: 'https://www.linkedin.com/in/alexander-hewitson-a4a010132',
      },
    ];
  }

  public ngOnInit(): void {}
}
