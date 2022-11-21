import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddclientComponent } from './addclient/addclient.component';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  
  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
    
  } 
  openDialog(){
    this.dialog.open(AddclientComponent);
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
