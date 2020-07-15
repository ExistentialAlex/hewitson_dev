import { Component, Input } from '@angular/core';
import { Skill } from '@hewitson-dev/utilities';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'hewitson-dev-skill',
  template: `
    <h2 [id]="skill.id" class="skill">
      {{ skill.skill
      }}<fa-icon
        class="skill__icon"
        [icon]="faPlus"
        (click)="open(skill.id)"
      ></fa-icon>
    </h2>
  `,
  styleUrls: ['./skills.component.scss']
})
export class SkillComponent {
  @Input() public skill: Skill;

  public faPlus: IconDefinition;

  constructor() {
    this.faPlus = faPlus;
  }

  public open(id: string) {
    const skillActive = 'skill--active';
    if (document.getElementById(id).classList.contains(skillActive)) {
      return document.getElementById(id).classList.remove(skillActive);
    }
    return document.getElementById(id).classList.add(skillActive);
  }
}
