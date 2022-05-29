import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'main-category', loadChildren: () => import('./main-category/main-category.module').then(m => m.MainCategoryModule)},
  { path: 'addresses', loadChildren: () => import('./addresses/addresses.module').then(m => m.AddressesModule) },
  { path: 'pay',loadChildren: () => import('./pay/pay.module').then(m => m.PayModule), ...canActivate(() => redirectUnauthorizedTo(['/home'])) },
  { path: 'orders',loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
