import { Component, OnInit } from '@angular/core';
import { image, name, email } from '../../../../assets/strings/business-card';

@Component({
  selector: 'hewitson-dev-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  public img: string;
  public name: string;
  public email: string;

  constructor() {
    this.img = image;
    this.name = name;
    this.email = email;
  }

  ngOnInit(): void {}
}
