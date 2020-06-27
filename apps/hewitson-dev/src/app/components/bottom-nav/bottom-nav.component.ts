import { Component, Input, OnInit } from '@angular/core';
import { Link } from '@hewitson-dev/utilities';

@Component({
  selector: 'hewitson-dev-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss'],
})
export class BottomNavComponent implements OnInit {
  @Input() public links: Link[];

  public currentPosition: string;

  public ngOnInit(): void {
    this.currentPosition = this.links.find((link) => {
      return window.location.href.split('/').includes(link.url.substring(1));
    }).position;
  }

  public move(link: string) {
    return (this.currentPosition = link);
  }
}
