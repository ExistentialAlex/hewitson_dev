import { Component, OnInit } from '@angular/core';
import { words } from '../../../assets/strings/header';

@Component({
  selector: 'hewitson-dev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public words: string[];
  public currentWord: string;
  public hide: boolean;

  constructor() {
    this.words = words;
    this.currentWord = this.words[0];
    this.hide = true;
    setTimeout(() => (this.hide = false), 1000);
  }

  ngOnInit(): void {
    let counter = 1;
    setInterval(() => {
      this.hide = true;
      setTimeout(() => {
        this.currentWord = this.words[counter];
        counter++;
        this.hide = false;
      }, 1000);
      if (counter >= this.words.length) counter = 0;
    }, 5000);
  }
}
