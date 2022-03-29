import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { Education } from '../../../common/interfaces/about';

@Component({
  selector: 'hewitson-dev-about-education',
  templateUrl: './about-education.component.html',
  styleUrls: ['./about-education.component.scss'],
})
export class AboutEducationComponent {
  @Input() public education: Education[];
  public calendar: IconDefinition;

  constructor() {
    this.calendar = faCalendar;
  }
}
