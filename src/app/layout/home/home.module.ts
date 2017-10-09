import { TranslateModule } from '@ngx-translate/core';
import { OwlModule } from 'ngx-owl-carousel';
import { HomeRoutes } from './home.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MenuModule } from '../../shared/index';
import { HeaderComponent } from './header/header.component';
import { FeaturedComponent } from './featured/featured.component';
import { ContactComponent } from './contact/contact.component';
import { SlidesComponent } from './slides/slides.component';
import { AppStoreComponent } from './app-store/app-store.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    OwlModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    HomeRoutes
  ],
  declarations: [HomeComponent,
    HeaderComponent,
    FeaturedComponent,
    ContactComponent,
    SlidesComponent,
    AppStoreComponent
]
})
export class HomeModule { }
