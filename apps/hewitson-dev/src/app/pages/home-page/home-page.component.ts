import { Component, OnInit } from '@angular/core';
import { Project } from '@hewitson-dev/utilities';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'hewitson-dev-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public projects: Observable<Project[]>;

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
  }

  ngOnInit(): void {}
}
