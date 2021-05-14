import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project, Tag } from '../../../common/interfaces/projects';
import { projects } from '../../../common/content/projects';

@Component({
  selector: 'hewitson-dev-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit {
  public project: Project;
  public tags: Tag[];
  public id: string;

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      this.tags = [];
      this.id = params['id'];
    });
  }

  public ngOnInit(): void {
    this.project = projects.find((project) => project.id === this.id);
  }
}
