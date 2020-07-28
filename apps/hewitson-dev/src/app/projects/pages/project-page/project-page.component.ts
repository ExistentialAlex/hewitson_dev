import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Project, hewProjects, hewTags, Tag } from '@hewitson-dev/utilities';

@Component({
  selector: 'hewitson-dev-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent {
  public project: Project;
  public tags: Tag[];

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
          this.tags = [];
          for (const tag of project.tags) {
            this.firestore
              .doc<Tag>(`${hewTags}/${tag}`)
              .valueChanges()
              .subscribe((finalTag) => this.tags.push(finalTag));
          }
        });
    });
  }
}
