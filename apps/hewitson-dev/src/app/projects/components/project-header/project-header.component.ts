import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hewitson-dev-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss'],
})
export class ProjectHeaderComponent implements OnInit {
  @Input() public title: string;
  @Input() public img: string;

  constructor() {}

  ngOnInit(): void {}
}
