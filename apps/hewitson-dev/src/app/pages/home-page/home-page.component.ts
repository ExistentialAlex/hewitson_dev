import { Component, OnInit } from '@angular/core';
import { Project, SocialLink } from '@hewitson-dev/utilities';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { name, job, email, image } from '../../../assets/strings/business-card';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'hewitson-dev-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public projects: Observable<Project[]>;
  public image: string;
  public name: string;
  public email: string;
  public job: string;
  public socialLinks: SocialLink[];

  constructor(private readonly firestore: AngularFirestore) {
    this.projects = this.firestore
      .collection<Project>('hew_projects')
      .snapshotChanges()
      .pipe(
        map((projects) => {
          return projects.map((project) => {
            return {
              id: project.payload.doc.id,
              ...project.payload.doc.data(),
            };
          });
        })
      );
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
