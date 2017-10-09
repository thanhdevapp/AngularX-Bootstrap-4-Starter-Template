import {MenuModule} from '../../shared/modules/menu/menu.module';
import { PrivacyPolicyRoutes } from './privacy-policy.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyComponent } from './privacy-policy.component';

@NgModule({
  imports: [
    CommonModule,
    PrivacyPolicyRoutes,
    MenuModule
  ],
  declarations: [PrivacyPolicyComponent]
})
export class PrivacyPolicyModule { }
