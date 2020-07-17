import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Project, hewProjects } from '@hewitson-dev/utilities';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'hewitson-dev-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit {
  public project: Project;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly firestore: AngularFirestore
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.firestore
        .doc<Project>(`${hewProjects}/${params['id']}`)
        .valueChanges()
        .subscribe((project) => {
          this.project = { id: params['id'], ...project };
          console.log(this.project);
        });
    });
  }

  ngOnInit(): void {}
}
