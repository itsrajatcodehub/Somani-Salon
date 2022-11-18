import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddmessageComponent } from './addmessage/addmessage.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  selected = 'Select Year';
  
 
  title = 'Table'
  headers = ["S.No", "Name", "Billing Email Address", "Transaction ID", "Amount"]


 clients = [
    {
      "sno" : "01",
      // "image" : "",
      "name" :"Travis",
      "email" : "travis@gmail.com",
      "transfer" :"AAFF2587892652652F",
      "amount" : "₹10,000"
  
    },
    {
      "sno" : "02",
      // "image" : "",
      "name" :"Travis",
      "email" : "travis@gmail.com",
      "transfer" :"AAFF2587892652652F",
      "amount" : "₹10,000"
  
    },
    {
      "sno" : "03",
      // "image" : "",
      "name" :"Travis",
      "email" : "travis@gmail.com",
      "transfer" :"AAFF2587892652652F",
      "amount" : "₹10,000"
  
    },
    {
      "sno" : "04",
      // "image" : "",
      "name" :"Travis",
      "email" : "travis@gmail.com",
      "transfer" :"AAFF2587892652652F",
      "amount" : "₹10,000"
  
    },
    {
      "sno" : "05",
      // "image" : "",
      "name" :"Travis",
      "email" : "travis@gmail.com",
      "transfer" :"AAFF2587892652652F",
      "amount" : "₹10,000"
  
    },
    {
      "sno" : "06",
      // "image" : "",
      "name" :"Travis",
      "email" : "travis@gmail.com",
      "transfer" :"AAFF2587892652652F",
      "amount" : "₹10,000"
  
    },
    {
      "sno" : "07",
      // "image" : "",
      "name" :"Travis",
      "email" : "travis@gmail.com",
      "transfer" :"AAFF2587892652652F",
      "amount" : "₹10,000"
  
    },
    {
      "sno" : "08",
      // "image" : "",
      "name" :"Travis",
      "email" : "travis@gmail.com",
      "transfer" :"AAFF2587892652652F",
      "amount" : "₹10,000"
  
    },
    {
      "sno" : "09",
      // "image" : "",
      "name" :"Travis",
      "email" : "travis@gmail.com",
      "transfer" :"AAFF2587892652652F",
      "amount" : "₹10,000"
  
    },
    {
      "sno" : "10",
      // "image" : "",
      "name" :"Travis",
      "email" : "travis@gmail.com",
      "transfer" :"AAFF2587892652652F",
      "amount" : "₹10,000"
  
    },
  ]

  openDialog(){
    this.dialog.open(AddmessageComponent);
  }
}
