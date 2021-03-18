import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../../common/interfaces/links';

@Component({
  selector: 'hewitson-dev-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input() public logo: string;
  @Input() public links: Link[];

  constructor() {}

  public ngOnInit(): void {}
}
