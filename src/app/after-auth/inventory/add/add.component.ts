import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControlName, FormControl } from '@angular/forms';
import { collection, Firestore } from '@angular/fire/firestore';
import { getDoc, doc, addDoc } from 'firebase/firestore';
import { MatButton } from '@angular/material/button';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';

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
  @Output() close: EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {
  }



  isLinear = false;


  services: SER[] = [
    { value: 'Facial-0', viewValue: 'Facial' },
    { value: 'Hair-1', viewValue: 'Hair' },
    { value: 'BodyCare-2', viewValue: 'Body Care' },
    { value: 'OccasionSpecific-3', viewValue: 'Occasion Specific' },
    { value: 'BridalMakeup-4', viewValue: 'Bridal Makeup' },
  ];

  types: SER[] = [
    { value: 'Styling-0', viewValue: 'Styling' },
    { value: 'Treatement-1', viewValue: 'Treatement' },
    { value: 'Haircut-2', viewValue: 'Haircut' },
    { value: 'color-3', viewValue: 'Color' },
    // {value: 'Auctor-4', viewValue: 'Auctor5'},
  ]

  subtypes: SER[] = [
    { value: 'Type1-0', viewValue: 'Type-1' },
    { value: 'Type2-0', viewValue: 'Type-2' },
    { value: 'Type3-0', viewValue: 'Type-3' },
    { value: 'Type4-0', viewValue: 'Type-4' },
  ]


  inventoryTable = new FormGroup({
    services: new FormControl('', [Validators.required]),
    types: new FormControl('', [Validators.required]),
    subtypes: new FormControl('', [Validators.required]),
  })


  // add data
  submit() {
    console.log(this.inventoryTable.value);
    this.close.emit()
    // to add the data
    addDoc(collection(this.firestore, 'services'),
      {
        service: this.inventoryTable.value.services,
        name: this.inventoryTable.value.types,
        email: this.inventoryTable.value.subtypes,
      }).then((services) => {
        console.log('Doc added');
      }).catch((error) => alert("problem in add doc"))
  }


  serviceForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    photo: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    tax: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    discount: new FormControl('', [Validators.required]),
  })


  label2Form = new FormGroup<any>({
    // service: new FormControl('', Validators.required)
  })


  // stage 1
  selectedIndex: number = 0;
  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
  }

  public stage1tostage2() {
    this.selectedIndex += 1;
    console.log(this.serviceForm.value);
  }

  public previousStep() {
    this.selectedIndex -= 1;

  }
  
  value:any;
  stage3value:any;
  public stage2tostage3() {
    this.selectedIndex += 1;
    // this.stage3value = value;
    // this.stageValue = address;
    console.log(this.stage3value);
    
  }



  public addresses: any[] = [];
 

  addAddress() {
    let control = new FormControl()
    console.log('name'+(this.addresses.length+1).toString());
    this.label2Form.addControl('name'+(this.addresses.length+1).toString(),control)
    
    this.addresses.push({
      control: control,

      // to hold the values
    });
    console.log(this.addresses);
    
    // this.label2Form.setValue(this.label2Form.service)
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }
  logValue() {
    console.log(this.addresses);
  }

  



  // submit btn to SWITCH THE TAB
  // selectedTab = 0;
  //   changeTab(tabIndex: number) {
  //     this.selectedTab = tabIndex;
  //   }

  selected = ''




}







