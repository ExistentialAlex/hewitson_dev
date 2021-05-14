import { Component, OnInit, Input } from '@angular/core';
import { SocialLink } from '../../../common/interfaces/links';

@Component({
  selector: 'hewitson-dev-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
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
