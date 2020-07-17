import { Component, OnInit } from '@angular/core';
import { Project, hewProjects } from '@hewitson-dev/utilities';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'hewitson-dev-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {
  public projects: Observable<Project[]>;

  constructor(private readonly firestore: AngularFirestore) {
    this.projects = this.firestore
      .collection<Project>(hewProjects)
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
