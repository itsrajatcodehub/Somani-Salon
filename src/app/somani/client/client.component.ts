import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})


export class ClientComponent implements OnInit {
  title = 'Table'
  headers = ["CheckBox", "Image", "Name", "MobileNo", "Email", "Date"]


 clients = [
    {
      "checkBox" : "",
      "image" : "",
      "name" :"Travis",
      "mobileNo" :"+919569695869",
      "email" : "travis@gmail.com",
      "date" : "cutting,23 june 2022"
  
    },
    {
      "checkBox" : "",
      "image" : "",
      "name" :"Travis",
      "mobileNo" :"+919569695869",
      "email" : "travis@gmail.com",
      "date" : "cutting,23 june 2022"
  
    },
    {
      "checkBox" : "",
      "image" : "",
      "name" :"Travis",
      "mobileNo" :"+919569695869",
      "email" : "travis@gmail.com",
      "date" : "cutting,23 june 2022"
  
    },
    {
      "checkBox" : "",
      "image" : "",
      "name" :"Travis",
      "mobileNo" :"+919569695869",
      "email" : "travis@gmail.com",
      "date" : "cutting,23 june 2022"
  
    },
    {
      "checkBox" : "",
      "image" : "",
      "name" :"Travis",
      "mobileNo" :"+919569695869",
      "email" : "travis@gmail.com",
      "date" : "cutting,23 june 2022"
  
    },
    {
      "checkBox" : "",
      "image" : "",
      "name" :"Travis",
      "mobileNo" :"+919569695869",
      "email" : "travis@gmail.com",
      "date" : "cutting,23 june 2022"
  
    },
    {
      "checkBox" : "",
      "image" : "",
      "name" :"Travis",
      "mobileNo" :"+919569695869",
      "email" : "travis@gmail.com",
      "date" : "cutting,23 june 2022"
  
    },
    
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
