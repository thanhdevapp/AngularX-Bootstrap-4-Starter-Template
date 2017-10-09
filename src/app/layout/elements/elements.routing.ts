import { ElementsComponent } from './elements.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component : ElementsComponent },
];

export const ElementsRoutes = RouterModule.forChild(routes);
