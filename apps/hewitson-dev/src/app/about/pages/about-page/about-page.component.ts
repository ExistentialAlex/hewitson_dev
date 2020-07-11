import { Component, OnInit } from '@angular/core';
import {
  image,
  name,
  email,
  job,
} from '../../../../assets/strings/business-card';
import { SocialLink, WorkHistory, hewWorkHistory } from '@hewitson-dev/utilities';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'hewitson-dev-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit {
  public image: string;
  public name: string;
  public email: string;
  public job: string;
  public socialLinks: SocialLink[];
  public history: WorkHistory[];

  constructor(private readonly firestore: AngularFirestore) {
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
    this.firestore
      .collection<WorkHistory>(hewWorkHistory)
      .valueChanges()
      .subscribe((history) => (this.history = history));
  }

  ngOnInit(): void {}
}
