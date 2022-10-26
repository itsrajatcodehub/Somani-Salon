import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'before-auth', loadChildren: () => import('./before-auth/before-auth.module').then(m => m.BeforeAuthModule) }, 
  { path: 'after-auth', loadChildren: () => import('./after-auth/after-auth.module').then(m => m.AfterAuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
