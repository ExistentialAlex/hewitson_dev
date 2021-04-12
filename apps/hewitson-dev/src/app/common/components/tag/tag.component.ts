import { Component, Input } from '@angular/core';

@Component({
  selector: 'hewitson-dev-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  @Input() public name: string;
  @Input() public colour: string;
  @Input() public textColour: string;
  @Input() public img?: string;

  constructor() {}
}
