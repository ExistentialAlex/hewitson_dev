import { Component, Input } from '@angular/core';

@Component({
  selector: 'hewitson-dev-skill',
  template: `
    <h2 class="skill">
      {{ skill }}
    </h2>
  `,
  styleUrls: ['./skills.component.scss'],
})
export class SkillComponent {
  @Input() public skill: string;

  constructor() {}
}
