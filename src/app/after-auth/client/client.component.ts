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
    headers = [ "Name", "MobileNo", "Email", "Service" ,"Date"]


 clients = [ 
    {
      "name" :"Rohan",
      "mobileNo" :"+919569695869",
      "email" : "Rohan@gmail.com",
      "service" : "Cutting",
      "date" : "23/Jan/2022"
  
    },
    {
      "name" :"Danil",
      "mobileNo" :"+919569695869",
      "email" : "Danil@gmail.com",
      "service" : "Shaving",
      "date" : "2/May/2022"
  
    },
    {
      "name" :"Rahul",
      "mobileNo" :"+919569695869",
      "email" : "Rahul@gmail.com",
      "service" : "Skin",
      "date" : "3/July/2022"
  
    },
    {
      "name" :"Sneha",
      "mobileNo" :"+919569695869",
      "email" : "Sneha@gmail.com",
      "service" : "Nailing",
      "date" : "10/Aug/2022"
  
    },
    {
      "name" :"Shubhi",
      "mobileNo" :"+919569695869",
      "email" : "Shubhi@gmail.com",
      "service" : "MAkeup",
      "date" : "23/Sep/2022"
  
    },
    {
      "name" :"Sourav",
      "mobileNo" :"+919569695869",
      "email" : "Sourav@gmail.com",
      "service" : "Beard",
      "date" : "21/Oct/2022"
  
    },
    {
      "name" :"Ritik",
      "mobileNo" :"+919569695869",
      "email" : "Ritik@gmail.com",
      "service" : "Cutting",
      "date" : "30/Oct/2022"
  
    }
 ]

}