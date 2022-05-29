import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { HomeComponent } from './home/home.component';
import { PayComponent } from './pages/pay/pay.component';

import { AddressesComponent } from './addresses/addresses.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'main-category', loadChildren: () => import('./main-category/main-category.module').then(m => m.MainCategoryModule)},
  { path: 'addresses', loadChildren: () => import('./addresses/addresses.module').then(m => m.AddressesModule) },
  { path: 'pay', component: PayComponent, ...canActivate(() => redirectUnauthorizedTo(['/home'])) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
