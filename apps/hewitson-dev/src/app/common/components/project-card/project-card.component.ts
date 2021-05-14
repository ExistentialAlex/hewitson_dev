import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../common/interfaces/projects';
import { faHeart, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'hewitson-dev-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() public project: Project;
  @Input() public displayIcons: boolean;

  public faHeart: IconDefinition;

  constructor() {
    this.faHeart = faHeart;
  }

  public ngOnInit(): void {}
}
