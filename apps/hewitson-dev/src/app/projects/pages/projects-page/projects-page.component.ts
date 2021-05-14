import { Component, OnInit } from '@angular/core';
import { Project } from '../../../common/interfaces/projects';
import { projects } from '../../../common/content/projects';

@Component({
  selector: 'hewitson-dev-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent {
  public projects: Project[];

  constructor() {
    this.projects = projects;
  }
}
