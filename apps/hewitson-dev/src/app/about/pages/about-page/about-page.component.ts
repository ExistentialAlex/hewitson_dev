import { Component, OnInit } from '@angular/core';
import { image, name, email, job } from '../../../../assets/strings/business-card';
import { SocialLink } from '@hewitson-dev/utilities';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'hewitson-dev-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  public image: string;
  public name: string;
  public email: string;
  public job: string;
  public socialLinks: SocialLink[];

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
  }

  ngOnInit(): void {}
}
