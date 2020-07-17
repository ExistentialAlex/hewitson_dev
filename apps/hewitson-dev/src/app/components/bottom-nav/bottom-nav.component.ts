import { Component, Input, OnInit } from '@angular/core';
import { Link } from '@hewitson-dev/utilities';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'hewitson-dev-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {
  @Input() public links: Link[];

  public currentPosition: string;

  constructor(private readonly router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) this.getPosition();
    });
  }

  public ngOnInit(): void {
    this.getPosition();
  }

  public getPosition() {
    return (this.currentPosition = this.links.find(link => {
      return window.location.href.split('/').includes(link.url.substring(1));
    }).position);
  }

  public move(link: string) {
    return (this.currentPosition = link);
  }
}
