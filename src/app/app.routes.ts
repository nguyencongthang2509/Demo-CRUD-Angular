import {RouterModule, Routes} from '@angular/router';
import {FormEmployeeManagementComponent} from "./pages/form-employee-management/form-employee-management.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'form-employee-management', component: FormEmployeeManagementComponent },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
