import { Component, Input } from '@angular/core';
import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { Tag } from '../../../common/interfaces/projects';

@Component({
  selector: 'hewitson-dev-project-article',
  templateUrl: './project-article.component.html',
  styleUrls: ['./project-article.component.scss'],
})
export class ProjectArticleComponent {
  @Input() public title: string;
  @Input() public link: string;
  @Input() public tags: Tag[];
  @Input() public markdownSrc: string;
  public faGitHub: IconDefinition;

  constructor() {
    this.faGitHub = faGithub;
  }
}
