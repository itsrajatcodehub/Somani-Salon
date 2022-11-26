import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControlName, FormControl} from '@angular/forms';
import { collection, Firestore } from '@angular/fire/firestore';
import { getDoc, doc, addDoc } from 'firebase/firestore';
import { MatButton } from '@angular/material/button';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


interface SER {
  value: string;
  viewValue: string;
}

// interface STY{
//   value: string;
//   viewValue: string; 
// } 

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  displayAddData: any
  constructor(private _formBuilder: FormBuilder, private firestore: Firestore, public dialog: MatDialog) { }
  @Output() close:EventEmitter<any>=new EventEmitter()

  ngOnInit(): void {
  }
  public addresses: any[] = [{
    address: '',
  }];
  addAddress() {
    // const uniqueID = uuid.v4();
    this.addresses.push({
      address: '',
      
    });
  }
  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }
  logValue() {
    console.log(this.addresses);
  }

  
  public names: any[] = [{
    name: '',
  }];
  addname() {
    // const uniqueID = uuid.v4();
    this.names.push({
      name: '',
      
    });
  }
  removename(i: number) {
    this.names.splice(i, 1);
  }
  logname() {
    console.log(this.names);
  }
  
  
  isLinear = false;
  
  
  services: SER[] = [
    {value: 'Facial-0', viewValue: 'Facial'},
    {value: 'Hair-1', viewValue: 'Hair'},
    {value: 'BodyCare-2', viewValue: 'Body Care'},
    {value: 'OccasionSpecific-3', viewValue: 'Occasion Specific'},
    {value: 'BridalMakeup-4', viewValue: 'Bridal Makeup'},
  ];

  types: SER[]=[
    {value: 'Styling-0', viewValue: 'Styling'},
    {value: 'Treatement-1', viewValue: 'Treatement'},
    {value: 'Haircut-2', viewValue: 'Haircut'},
    {value: 'color-3', viewValue: 'Color'},
    // {value: 'Auctor-4', viewValue: 'Auctor5'},
  ]
  
  subtypes: SER[]=[
    {value: 'Type1-0', viewValue: 'Type-1'},
    {value: 'Type2-0', viewValue: 'Type-2'},
    {value: 'Type3-0', viewValue: 'Type-3'},
    {value: 'Type4-0', viewValue: 'Type-4'},
  ] 
  
  
  inventoryTable = new FormGroup({
    services : new FormControl('',[Validators.required]),
    types : new FormControl('',[Validators.required]),
    subtypes : new FormControl('',[Validators.required]),
  })

  
  // add data
  submit(){
    console.log(this.inventoryTable.value);
    this.close.emit()
    // to add the data
    addDoc(collection(this.firestore,'services'),
      {
        service: this.inventoryTable.value.services, 
        name:this.inventoryTable.value.types, 
        email: this.inventoryTable.value.subtypes,
      }).then((services)=>{
        console.log('Doc added');
      }).catch((error) => alert("problem in add doc"))
    }



  // public closeIcon : boolean = true;
  // public showDialog1 : boolean = true;
  // public showDialog2 : boolean = false;
  // public showDialog3 : boolean = false;
  

  // forDialog2=(event:any):void=>{
  //   this.showDialog1 = false;
  //   this.showDialog2 = true;
  //   this.showDialog3 = false;
  // }

  // forDialog3=(event:any):void=>{
  //   this.showDialog1 = false;
  //   this.showDialog2 = false;
  //   this.showDialog3 = true;
  // }
  

  selected = 'option2';






}







