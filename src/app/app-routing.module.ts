import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/components';
import { ContactComponent } from './modules/contacts/components';
import { AccountComponent } from './modules/accounts/components';
import { ProductComponent } from './modules/products/components';

const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: ContactComponent,
  },
  {
    path: 'account',
    pathMatch: 'full',
    component: AccountComponent,
  },
  {
    path: 'product',
    pathMatch: 'full',
    component: ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  declarations: [
    ProductComponent,
    DashboardComponent,
    AccountComponent,
    ContactComponent,
  ],
})
export class AppRoutingModule {}
