import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'before-auth', loadChildren: () => import('./before-auth/before-auth.module').then(m => m.BeforeAuthModule) }, 
  { path: 'after-auth', loadChildren: () => import('./after-auth/after-auth.module').then(m => m.AfterAuthModule) },
  {
    path: 'app',
    loadChildren: () =>
    import('./somani/somani.module').then((m) => m.SomaniModule)
  },
  {
    path:'',
    redirectTo:'app',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
