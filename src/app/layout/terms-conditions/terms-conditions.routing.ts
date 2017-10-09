import { TermsConditionsComponent } from './terms-conditions.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TermsConditionsComponent },
];

export const TermsConditionsRoutes = RouterModule.forChild(routes);
