import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  constructor(private db: AngularFirestore) {}

  //  API for component consumption

  createContact(form) {
    return this.db.collection('phonebook').add(form);
  }

  get() {
    return this.db.collection('phonebook').valueChanges();
  }
}
