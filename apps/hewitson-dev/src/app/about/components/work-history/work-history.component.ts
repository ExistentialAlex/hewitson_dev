import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hewitson-dev-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent implements OnInit {

  @Input() public history: WorkHistory[];

  constructor() { }

  ngOnInit(): void {
  }

}
