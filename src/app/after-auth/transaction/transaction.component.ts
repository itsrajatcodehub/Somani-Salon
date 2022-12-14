import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddmessageComponent } from './addmessage/addmessage.component';
import { collection, Firestore } from '@angular/fire/firestore';
import {
  getDoc,
  doc,
  addDoc,
  getDocs,
  QuerySnapshot,
} from 'firebase/firestore';
import { AddBillComponent } from './add-bill/add-bill.component';
// import { Item } from '@angular/fire/analytics';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  items: any[] = [];
  constructor(private dialog: MatDialog, private firestore: Firestore) {}
  totalCost: number = 0;
  ngOnInit(): void {
    getDocs(collection(this.firestore, 'transactions')).then(
      (querySnapshot: QuerySnapshot) => {
        this.items = [];
        querySnapshot.forEach((doc: any) => {
          let data = doc.data()
          data.services = (Object.keys(data.services).filter((item:string)=>!item.endsWith('Quantity')))
          this.items.push(data);
          this.totalCost += data.finalCost;
        });
        console.log('data getting', this.items);
      }
    );
  }

  selected = 'Select Year';

  title = 'Table';
  headers = [
    'S.No',
    'Name',
    'Email Address',
    'Service Name',
    'Stylist Name',
    'Transaction Id',
    'Amount',
  ];

  openDialog() {
    const dialog = this.dialog.open(AddmessageComponent);
    dialog.componentInstance.close.subscribe(() => {
      dialog.close();
      this.ngOnInit();
    });
  }

  addTransaction(){
    const dialog = this.dialog.open(AddBillComponent);
    // dialog.componentInstance.close.subscribe(() => {
    //   dialog.close();
    //   this.ngOnInit();
    // });
  }
}
