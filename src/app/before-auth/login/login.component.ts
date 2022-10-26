import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required, Validators.minLength(5)])
  }); 


  // for ROUTING


  forget(){
    console.log("forget works");
    this.route.navigate(['/before-auth/forget']);
  }

  submitForm(){
    console.log("submit works");
    this.route.navigate(['/after-auth/inventory'])
  }
}
