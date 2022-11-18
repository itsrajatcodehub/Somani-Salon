import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  } 

  title = 'Table'
    headers = [ "Name", "MobileNo", "Email", "Date"]


 clients = [
    {
      "name" :"Travis",
      "mobileNo" :"+919569695869",
      "email" : "travis@gmail.com",
      "date" : "cutting,23 june 2022"
  
    },
    {
      "name" :"Travis",
      "mobileNo" :"+919569695869",
      "email" : "travis@gmail.com",
      "date" : "cutting,23 june 2022"
  
    },
    {
      "name" :"Travis",
      "mobileNo" :"+919569695869",
      "email" : "travis@gmail.com",
      "date" : "cutting,23 june 2022"
  
    },
    {
      "name" :"Travis",
      "mobileNo" :"+919569695869",
      "email" : "travis@gmail.com",
      "date" : "cutting,23 june 2022"
  
    },
    {
      "name" :"Travis",
      "mobileNo" :"+919569695869",
      "email" : "travis@gmail.com",
      "date" : "cutting,23 june 2022"
  
    },
    {
      "name" :"Travis",
      "mobileNo" :"+919569695869",
      "email" : "travis@gmail.com",
      "date" : "cutting,23 june 2022"
  
    },
    {
      "name" :"Travis",
      "mobileNo" :"+919569695869",
      "email" : "travis@gmail.com",
      "date" : "cutting,23 june 2022"
  
    }
 ]

}
