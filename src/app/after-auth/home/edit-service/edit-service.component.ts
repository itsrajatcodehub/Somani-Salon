import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControlName, FormControl} from '@angular/forms';
import { collection, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private firestore: Firestore, @Inject(MAT_DIALOG_DATA) public services: any) { }
  @Output() close:EventEmitter<any>=new EventEmitter()
  ngOnInit(): void { 
    this.serviceForm.patchValue(this.services)
  }

  serviceForm = new FormGroup({
    name : new FormControl('',[Validators.required])
  })

  edit(id:string){
    updateDoc(doc(this.firestore,'/services/' + id),this.serviceForm.value).then((data)=>{
      console.log('Doc updated');
  })
  this.close.emit() 
  }
}
