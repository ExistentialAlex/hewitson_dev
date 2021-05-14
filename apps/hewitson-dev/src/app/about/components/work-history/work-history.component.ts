import { Component, Input } from '@angular/core';
import { WorkHistory } from '../../../common/interfaces/about';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'hewitson-dev-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss'],
})
export class WorkHistoryComponent {
  @Input() public history: WorkHistory[];
  public faTimes: IconDefinition;
  public present: number;

  constructor() {
    this.faTimes = faTimes;
    this.present = new Date().getTime();
  }

  public getSecondDate(date?: number) {
    if (date) return date;
    return this.present;
  }
}
