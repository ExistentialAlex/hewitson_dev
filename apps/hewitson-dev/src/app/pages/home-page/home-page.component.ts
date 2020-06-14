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
    // this.projects = [
    //   {
    //     id: 'id1',
    //     title: 'Project 1',
    //     description: 'this is the first test project',
    //     mdFile: '',
    //     img: 'assets/img/profile.jpg',
    //   },

    //   {
    //     id: 'id2',
    //     title: 'Project 2',
    //     description: 'this is the first test project',
    //     mdFile: '',
    //     img: 'assets/img/profile.jpg',
    //   },

    //   {
    //     id: 'id3',
    //     title: 'Project 3',
    //     description: 'this is the first test project',
    //     mdFile: '',
    //   },
    // ];
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
    this.projects.subscribe((projects) => console.log(projects));
  }

  ngOnInit(): void {}
}
