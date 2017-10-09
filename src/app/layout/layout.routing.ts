import { element } from 'protractor';
import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', loadChildren: './home/home.module#HomeModule' },
      { path: 'elements', loadChildren: './elements/elements.module#ElementsModule' },
    ]
  },
];

export const LayoutRoutes = RouterModule.forChild(routes);
