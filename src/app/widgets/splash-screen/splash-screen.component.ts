import { ViewEncapsulation } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],

})
export class SplashScreenComponent implements OnInit {
  windowWidth: string;
  showSplash: boolean = true
  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.windowWidth = '-' + window.innerWidth + 'px';


      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 500);
    }, 3000);

  }

}
