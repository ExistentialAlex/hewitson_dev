import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../common/interfaces/projects';
import { Observable } from 'rxjs';

@Component({
  selector: 'hewitson-dev-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  @Input() public projects: Project[];

  constructor() {}

  public ngOnInit(): void {}
}
