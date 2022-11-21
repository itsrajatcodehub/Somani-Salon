import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

import { Auth, signInWithPopup, GoogleAuthProvider, signOut, UserCredential } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any;
  constructor(private routes : Router , private auth: AuthService, private Auth:Auth) { }

  ngOnInit(): void {
  }

  loginForm: any = new FormGroup({ 
    email : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required, Validators.minLength(5)])
  }); 

  
  // to login through firebase
  login(){ 
    if (this.loginForm.valid) { 
      this.auth 
        .emailLogin(this.loginForm.value.email, this.loginForm.value.password)
        .then(() => this.routes.navigate(['/after-auth/home']))
        .catch((error) => alert("Invalid Sign In" + error.toString()));
        
    } else {
      alert("Invalid Login Form");
    }
  } 

  googleSignin(){
    signInWithPopup(this.Auth, new GoogleAuthProvider()).then(
      async (credentials: UserCredential) => {
        this.user = credentials.user;
        this.routes.navigate(['/after-auth/home']);
      }
    );
  }


  // to redirect to signup page
  signup(){
    this.routes.navigate(['/before-auth/signup'])
  }

  // to redirect to forget page
  forget(){
    console.log("forget works");
    this.routes.navigate(['/before-auth/forget']);
  }


  
}
