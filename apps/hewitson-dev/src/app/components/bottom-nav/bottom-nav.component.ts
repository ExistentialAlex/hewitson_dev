import { Component, Input } from '@angular/core';
import { Link } from '../../common/interfaces/links';

@Component({
  selector: 'hewitson-dev-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss'],
})
export class BottomNavComponent {
  @Input() public links: Link[];

  constructor() {}
}
