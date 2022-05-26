import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { HomeComponent } from './pages/home/home.component';
import { PayComponent } from './pages/pay/pay.component';
import { MainPizzaComponent } from './pages/main-pizza/main-pizza.component';
import { AddressesComponent } from './pages/addresses/addresses.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'main-pizza', component: MainPizzaComponent },
  { path: 'addresses', component: AddressesComponent },
  { path: 'pay', component: PayComponent, ...canActivate(() => redirectUnauthorizedTo(['/home'])) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
