import { Component } from '@angular/core';
import { Link } from './common/interfaces/links';
import {
  faHome,
  faUser,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';

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
      url: '/home',
      icon: faHome,
      position: '16.5%',
    },
    {
      title: 'About',
      url: '/about',
      icon: faUser,
      position: '50%',
    },
    {
      title: 'Projects',
      url: '/projects',
      icon: faLaptopCode,
      position: '83.25%',
    },
  ];
}
