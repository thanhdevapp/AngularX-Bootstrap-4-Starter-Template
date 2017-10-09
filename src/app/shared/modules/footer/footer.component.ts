import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

declare var $;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit, OnDestroy {

  constructor() {
  }

  async ngOnInit() {
  }

  async ngOnDestroy() {    
  }
}
