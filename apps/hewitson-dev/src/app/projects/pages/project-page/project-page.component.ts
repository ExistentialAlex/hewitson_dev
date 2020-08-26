import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Project, hewProjects, hewTags, Tag } from '@hewitson-dev/utilities';
import * as firebase from 'firebase/app';

@Component({
  selector: 'hewitson-dev-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  public project: Project;
  public tags: Tag[];
  public id: string;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly firestore: AngularFirestore
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.tags = [];
      this.id = params['id'];
      const increment1 = firebase.firestore.FieldValue.increment(1);
      this.firestore
        .doc(`${hewProjects}/${this.id}`)
        .update({ views: increment1 });
    });
  }

  public ngOnInit(): void {
    this.firestore
      .doc<Project>(`${hewProjects}/${this.id}`)
      .valueChanges()
      .subscribe(project => {
        this.project = { id: this.id, ...project };
        if (project.tags) this.updateTags(project);
      });
  }

  public updateTags(project: Project) {
    for (const tag of project.tags) {
      this.firestore
        .doc<Tag>(`${hewTags}/${tag}`)
        .valueChanges()
        .subscribe(finalTag => {
          if (
            !(
              this.tags.filter(tagToCheck => tagToCheck.name === finalTag.name)
                .length > 0
            )
          ) {
            this.tags.push(finalTag);
          }
        });
    }
  }
}
