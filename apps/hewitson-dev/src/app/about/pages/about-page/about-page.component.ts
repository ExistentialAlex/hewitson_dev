import { Component } from '@angular/core';
import {
  image,
  name,
  email,
  job,
} from '../../../../assets/strings/business-card';
import {
  SocialLink,
  WorkHistory,
  hewWorkHistory,
  Skill,
  hewSkills,
} from '@hewitson-dev/utilities';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

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
  public skills: Skill[];

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
      .pipe(
        map((history) => {
          return history.sort((a, b) => b.dates[0] - a.dates[0]);
        })
      )
      .subscribe((history) => (this.history = history));
    this.firestore
      .collection<Skill>(hewSkills)
      .valueChanges()
      .subscribe((skills) => (this.skills = skills));
  }
}
