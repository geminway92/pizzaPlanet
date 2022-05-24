import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PayComponent } from './pages/pay/pay.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'carta' },
  { path: 'carta', component: HomeComponent },
  { 
    path: 'pay', 
    component: PayComponent, ...canActivate(() => redirectUnauthorizedTo(['/carta'])) 
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
