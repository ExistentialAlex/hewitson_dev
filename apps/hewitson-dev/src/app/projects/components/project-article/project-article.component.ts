import { Component, Input } from '@angular/core';
import { Tag } from '@hewitson-dev/utilities';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'hewitson-dev-project-article',
  templateUrl: './project-article.component.html',
  styleUrls: ['./project-article.component.scss']
})
export class ProjectArticleComponent {
  @Input() public title: string;
  @Input() public views: number;
  @Input() public tags: Tag[];
  @Input() public markdownSrc: string;

  public faEye: IconDefinition;

  constructor() {
    this.faEye = faEye;
  }
}
