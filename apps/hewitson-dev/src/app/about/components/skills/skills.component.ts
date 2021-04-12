import { Component, Input } from '@angular/core';
import { Tag } from '../../../common/interfaces/projects';

@Component({
  selector: 'hewitson-dev-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  @Input() public skills: Tag[];

  constructor() {}
}
