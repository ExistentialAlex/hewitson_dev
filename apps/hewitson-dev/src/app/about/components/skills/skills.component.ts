import { Component, Input } from '@angular/core';
import { Skill } from '@hewitson-dev/utilities';

@Component({
  selector: 'hewitson-dev-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input() public skills: Skill[];

  constructor() {}
}
