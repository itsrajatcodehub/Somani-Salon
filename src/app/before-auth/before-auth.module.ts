import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeforeAuthRoutingModule } from './before-auth-routing.module';
import { BeforeAuthComponent } from './before-auth.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { ForgetComponent } from './forget/forget.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BeforeAuthComponent,
    LoginComponent,
    OtpComponent,
    ForgetComponent
  ],
  imports: [
    CommonModule,
    BeforeAuthRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    OtpComponent,
    ForgetComponent
  ]
})
export class BeforeAuthModule { }
