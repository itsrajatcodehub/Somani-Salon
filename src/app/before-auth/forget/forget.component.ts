import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  otp(){
    console.log("otp works");
    this.route.navigate(['/before-auth/otp'])
  }

  join(){
    console.log("join works");
    this.route.navigate(['/before-auth/login']);
  }
}
