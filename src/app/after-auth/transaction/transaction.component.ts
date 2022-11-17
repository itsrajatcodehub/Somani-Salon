import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor() { }

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
<<<<<<< Updated upstream
    
=======
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
    // {
    //   "sno" : "11",
    //   "name" :"Travis",
    //   "email" : "travis@gmail.com",
    //   "transfer" :"AAFF2587892652652F",
    //   "amount" : "₹10,000"
  
    // },
    // {
    //   "sno" : "12",
    //   "name" :"Travis",
    //   "email" : "travis@gmail.com",
    //   "transfer" :"AAFF2587892652652F",
    //   "amount" : "₹10,000"
  
    // },
    // {
    //   "sno" : "13",
    //   "name" :"Travis",
    //   "email" : "travis@gmail.com",
    //   "transfer" :"AAFF2587892652652F",
    //   "amount" : "₹10,000"
  
    // },
    // {
    //   "sno" : "14",
    //   "name" :"Travis",
    //   "email" : "travis@gmail.com",
    //   "transfer" :"AAFF2587892652652F",
    //   "amount" : "₹10,000"
  
    // }
>>>>>>> Stashed changes
  
  ]
}
