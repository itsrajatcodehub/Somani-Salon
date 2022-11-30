import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private fs:Firestore) { }

  addTransaction(data:any){
    return addDoc(collection(this.fs,"transactions"),data)
  }
}
