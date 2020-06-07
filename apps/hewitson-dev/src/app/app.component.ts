import { Component } from '@angular/core';
import { Link } from '@hewitson-dev/utilities';
import { faHome, faUser, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'hewitson-dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'hewitson-dev';
  public links: Link[] = [
    {
      title: 'Home',
      url: '',
      icon: faHome,
    },
    {
      title: 'About',
      url: '/about',
      icon: faUser,
    },
    {
      title: 'Projects',
      url: '/projects',
      icon: faLaptopCode,
    },
  ];
}
