import { Component } from '@angular/core';
import {
  image,
  name,
  email,
  job,
} from '../../../../assets/strings/business-card';
import { WorkHistory, Skill } from '../../../common/interfaces/about';
import { SocialLink } from '../../../common/interfaces/links';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { workHistory } from '../../../common/content/work-history';
import { skills } from '../../../common/content/skills';
import { Tag } from '../../../common/interfaces/projects';

@Component({
  selector: 'hewitson-dev-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {
  public image: string;
  public name: string;
  public email: string;
  public job: string;
  public socialLinks: SocialLink[];
  public history: WorkHistory[];
  public skills: Tag[];

  constructor() {
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
    this.history = workHistory;
    this.history.sort((a, b) => b.dates[0] - a.dates[0]);
    this.skills = skills;
  }
}
