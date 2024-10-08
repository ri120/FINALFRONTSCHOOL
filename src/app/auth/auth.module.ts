import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { ResetPasswordComponent } from './reset-password/reset-password.component';


import { MatModule } from 'src/app/appModules/mat.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { OtpPasswordComponent } from './otp-password/otp-password.component';
// import { OtpPasswordComponent } from './otp-password/otp-password.component';
// import { NgxOtpInputModule } from 'ngx-otp-input';



@NgModule({
  declarations: [
    SignInComponent, 
    SignUpComponent,
    ForgotPasswordComponent, 
     ResetPasswordComponent,
    OtpPasswordComponent
   
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
     NgxOtpInputModule

  ]
})
export class AuthModule { }
