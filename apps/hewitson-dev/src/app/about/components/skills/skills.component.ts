import { Component, Input } from '@angular/core';

@Component({
  selector: 'hewitson-dev-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  @Input() public skills: string[];

  constructor() {}
}
