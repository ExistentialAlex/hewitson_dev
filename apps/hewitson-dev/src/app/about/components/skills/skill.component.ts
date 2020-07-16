import { Component, Input } from '@angular/core';
import { Skill } from '@hewitson-dev/utilities';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'hewitson-dev-skill',
  template: `
    <h2 [id]="skill.id" class="skill" [ngClass]="{'skill--active': skill.open }">
      {{ skill.skill
      }}<fa-icon
        *ngIf="skill.description"
        class="skill__icon"
        [icon]="faPlus"
        (click)="open()"
      ></fa-icon>
    </h2>
    <div *ngIf="skill.description" class="skill__description" [ngClass]="{'skill__description--active': skill.open }">
      <p class="skill__description--text">{{ skill.description }}</p>
    </div>
  `,
  styleUrls: ['./skills.component.scss']
})
export class SkillComponent {
  @Input() public skill: Skill;

  public faPlus: IconDefinition;

  constructor() {
    this.faPlus = faPlus;
  }

  public open() {
    return this.skill.open = !this.skill.open;
  }
}
