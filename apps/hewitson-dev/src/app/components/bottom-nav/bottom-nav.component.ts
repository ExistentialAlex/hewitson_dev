import { Component, OnInit, Input } from '@angular/core';
import { Link } from '@hewitson-dev/utilities';

@Component({
  selector: 'hewitson-dev-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {

  @Input() public links: Link[];

  constructor() { }

  ngOnInit(): void {
  }

}
