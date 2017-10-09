import { PrivacyPolicyComponent } from './privacy-policy.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PrivacyPolicyComponent },
];

export const PrivacyPolicyRoutes = RouterModule.forChild(routes);
