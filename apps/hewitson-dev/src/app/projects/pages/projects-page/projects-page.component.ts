import { Component, OnInit } from '@angular/core';
import { Project } from '@hewitson-dev/utilities';

@Component({
  selector: 'hewitson-dev-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {
  public projects: Project[];

  constructor() {
    this.projects = [
      {
        id: 'id1',
        title: 'Project 1',
        description: 'this is the first test project',
        mdFile: '',
        img: 'assets/img/profile.jpg',
      },

      {
        id: 'id2',
        title: 'Project 2',
        description: 'this is the first test project',
        mdFile: '',
        img: 'assets/img/profile.jpg',
      },

      {
        id: 'id3',
        title: 'Project 3',
        description: 'this is the first test project',
        mdFile: '',
      },
    ];
  }

  ngOnInit(): void {}
}
