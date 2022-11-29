import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControlName, FormControl} from '@angular/forms';
import { collection, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private firestore: Firestore, @Inject(MAT_DIALOG_DATA) public customers: any) { }
  @Output() close:EventEmitter<any>=new EventEmitter()
  ngOnInit(): void { 
    this.customerForm.patchValue(this.customers)
  }

  customerForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    contact : new FormControl('',[Validators.required]),
  })

  edit(id:string){
    updateDoc(doc(this.firestore,'/customers/' + id),this.customerForm.value).then((data)=>{
      console.log('Doc updated');
  })
this.close.emit() 
  }
}
