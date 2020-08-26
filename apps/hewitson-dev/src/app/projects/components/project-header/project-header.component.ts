import { Component, Input } from '@angular/core';

@Component({
  selector: 'hewitson-dev-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss'],
})
export class ProjectHeaderComponent {
  @Input() public img: string;

  constructor() {}
}
