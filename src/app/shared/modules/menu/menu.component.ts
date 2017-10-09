import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

declare var $;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [
    './menu.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit, OnDestroy {


  constructor(public rt: Router) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }
}
