import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { OtpComponent } from './otp/otp.component';
<<<<<<< Updated upstream
=======
import { SignUpComponent } from './sign-up/sign-up.component';
>>>>>>> Stashed changes
// import { BeforeAuthComponent } from './before-auth.component';

const routes: Routes = [
{ 
  path: '', 
<<<<<<< Updated upstream
  component: LoginComponent 
=======
  component: LoginComponent,
  pathMatch : "full"
>>>>>>> Stashed changes
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'forget',
  component: ForgetComponent
},
{
  path: 'otp',
  component: OtpComponent
<<<<<<< Updated upstream
=======
},
{
  path: 'signup',
  component: SignUpComponent
>>>>>>> Stashed changes
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeforeAuthRoutingModule { }
