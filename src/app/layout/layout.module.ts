import { FooterModule } from './../shared/modules/footer/footer.module';
import { MenuModule } from './../shared/modules/menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutes } from './layout.routing';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    FooterModule,
    LayoutRoutes
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
