import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Auth, authState, GoogleAuthProvider, signInWithPopup, signOut, UserCredential } from "@angular/fire/auth";
import { createUserWithEmailAndPassword, signInAnonymously, signInWithEmailAndPassword } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  constructor(private route: Router, private http:HttpClient, private auth: Auth) { }

// for google login - *but didn't use ... used directly
googleLogin() {
  signInWithPopup(this.auth, new GoogleAuthProvider()).then(
    async (credentials: UserCredential) => {
      this.user = credentials.user;
    }
  );
}


// email signin
emailLogin(email: string, password: string) {
  return signInWithEmailAndPassword(this.auth, email, password);
}

// emial signup
emailSignup(email: string, password: string) {
  return createUserWithEmailAndPassword(this.auth, email, password);
}

// logout
logout() {
  return signOut(this.auth);
}

//  trial - anonymous 
anonymousSignIn() {
  return signInAnonymously(this.auth);
}
}