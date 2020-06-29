import { Component, OnInit, Input } from '@angular/core';
import { SocialLink } from '@hewitson-dev/utilities';

@Component({
  selector: 'hewitson-dev-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
})
export class BusinessCardComponent implements OnInit {
  @Input() public image: string;
  @Input() public name: string;
  @Input() public email: string;
  @Input() public job: string;
  @Input() public socialLinks: SocialLink[];

  constructor() {}

  public ngOnInit(): void {}

  public navigate(url: string) {
    return (window.location.href = url);
  }
}
