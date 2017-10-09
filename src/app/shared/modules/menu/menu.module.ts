import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { SmoothScrollToDirective, SmoothScrollDirective } from 'ng2-smooth-scroll';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent
  ],
  declarations: [
    MenuComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective
]
})
export class MenuModule { }
