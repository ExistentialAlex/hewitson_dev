import { Component, OnInit, Input } from '@angular/core';
import { WorkHistory } from '@hewitson-dev/utilities';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'hewitson-dev-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss'],
})
export class WorkHistoryComponent implements OnInit {
  @Input() public history: WorkHistory[];
  public faTimes: IconDefinition;

  constructor() {
    this.faTimes = faTimes;
  }

  ngOnInit(): void {}

  public getSecondDate(date?: number) {
    if (date) return date;
    return new Date().getTime();
  }
}
