import { MenuModule } from './../../shared/modules/menu/menu.module';
import { TermsConditionsRoutes } from './terms-conditions.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsConditionsComponent } from './terms-conditions.component';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    TermsConditionsRoutes
  ],
  declarations: [TermsConditionsComponent]
})
export class TermsConditionsModule { }
