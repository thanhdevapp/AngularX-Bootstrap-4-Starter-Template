import { ElementsRoutes } from './elements.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsComponent } from './elements.component';

@NgModule({
  imports: [
    CommonModule,
    ElementsRoutes
  ],
  declarations: [ElementsComponent]
})
export class ElementsModule { }
