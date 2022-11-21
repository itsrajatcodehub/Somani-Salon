import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { collection, Firestore } from '@angular/fire/firestore';
import { doc, addDoc } from 'firebase/firestore';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {

  constructor(private firestore: Firestore) { }
@Output() close: EventEmitter<any>=new EventEmitter()
  ngOnInit(): void {
  }
client = new FormGroup({
  name : new FormControl('',[Validators.required]),
  mobile: new FormControl('',[Validators.required]),
  email : new FormControl('',[Validators.required]),
  date : new FormControl('',[Validators.required]),
})

  submit(){
    addDoc(collection(this.firestore,'clientdata'),{name: this.client.value.name,
      mobile: this.client.value.mobile,
      email: this.client.value.email,
      date: this.client.value.date,
    }).then((data)=>{
      console.log('Doc added');
    })
    console.log(this.client.value);
    this.close.emit()
  }

}