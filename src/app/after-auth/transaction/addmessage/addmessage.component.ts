import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControlName, FormControl} from '@angular/forms';

interface SER {
  value: string;
  viewValue: string;
}

interface STY{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-addmessage',
  templateUrl: './addmessage.component.html',
  styleUrls: ['./addmessage.component.css']
})
export class AddmessageComponent implements OnInit {
  
  constructor(private _formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  

  services: SER[] = [
    {value: 'Nail Art-0', viewValue: 'Nail Art'},
    {value: 'Shaving-1', viewValue: 'Shaving'},
    {value: 'Haircut-2', viewValue: 'Haircut'},
    {value: 'Shampoo-3', viewValue: 'Shampoo'},
    {value: 'Hair Dryer-4', viewValue: 'Hair Dryer'},
  ];

  stylists: STY[]=[
    {value: 'Auctor-0', viewValue: 'Auctor1'},
    {value: 'Auctor-1', viewValue: 'Auctor2'},
    {value: 'Auctor-2', viewValue: 'Auctor3'},
    {value: 'Auctor-3', viewValue: 'Auctor4'},
    {value: 'Auctor-4', viewValue: 'Auctor5'},
  ]

  
  appointment = new FormGroup({
    name : new FormControl('',[Validators.required]),
    services : new FormControl('',[Validators.required]),
    stylists : new FormControl('',[Validators.required])
  })
  
  
  submit(){
    console.log(this.appointment.value);
  }
}
