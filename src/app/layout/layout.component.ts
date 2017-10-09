import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.nano').nanoScroller();
  }

}
