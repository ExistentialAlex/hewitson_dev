import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hewitson-dev-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input() public name: string;
  @Input() public colour: string;
  @Input() public textColour: string;

  constructor() { }

  ngOnInit(): void {
  }

}
