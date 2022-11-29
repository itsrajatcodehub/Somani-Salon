import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControlName, FormControl } from '@angular/forms';
import { collection, Firestore } from '@angular/fire/firestore';
import { getDoc, doc, addDoc } from 'firebase/firestore';


@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private firestore: Firestore) { }
  @Output() close: EventEmitter<any> = new EventEmitter()
  ngOnInit(): void {
  }

  services = new FormGroup({
    name: new FormControl('', [Validators.required]),
  })

  submit() {
    console.log(this.services.value);
    this.close.emit()
    // to add the data
    addDoc(collection(this.firestore, 'services'),
      this.services.value
    ).then((appointmentdata) => {
      console.log('Doc added');
    }).catch((error) => alert("problem in add doc"))
  }


  reset() {
    this.services.reset();
  }
}