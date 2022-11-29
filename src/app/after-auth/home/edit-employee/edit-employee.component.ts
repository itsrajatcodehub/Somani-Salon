import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControlName, FormControl} from '@angular/forms';
import { collection, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface SHF {
  value: string;
  viewValue: string;
}

interface ATD{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private firestore: Firestore, @Inject(MAT_DIALOG_DATA) public employee: any) { }
  @Output() close:EventEmitter<any>=new EventEmitter()
  ngOnInit(): void {
    this.employeeForm.patchValue(this.employee)
  } 
  

  shifts: SHF[] = [
    {value: 'Morning', viewValue: 'Morning'},
    {value: 'Evening', viewValue: 'Evening'},
  ];

  attendance : ATD[] = [
    {value: 'Present', viewValue: 'Present'},
    {value: 'Absent', viewValue: 'Absent'},
  ]

  employeeForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    shift : new FormControl('',[Validators.required]),
    attendance : new FormControl('',[Validators.required])
  })

  edit(id:string){
    updateDoc(doc(this.firestore,'/employee/' + id),this.employeeForm.value).then((data)=>{
          console.log('Doc updated');
      })
    this.close.emit() 
  }
}
