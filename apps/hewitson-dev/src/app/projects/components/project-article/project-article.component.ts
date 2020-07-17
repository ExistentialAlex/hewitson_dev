import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hewitson-dev-project-article',
  templateUrl: './project-article.component.html',
  styleUrls: ['./project-article.component.scss']
})
export class ProjectArticleComponent implements OnInit {

  @Input() public markdownSrc: string;

  constructor() { }

  ngOnInit(): void {
  }

}
