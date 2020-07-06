import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hewitson-dev-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  @Input() public img: string;
  @Input() public name: string;
  @Input() public email: string;

  constructor() { }

  ngOnInit(): void {
  }

}
