import { inject, Injectable } from '@angular/core';
import { doc, onSnapshot } from "firebase/firestore";
import { collection, Firestore } from '@angular/fire/firestore';
import { User } from './models/user.class';


@Injectable({
  providedIn: 'root'
})
export class FirebaseServicesService {
  firestore = inject(Firestore);
  users: User[] = [];
  unsubUserList;
  // unsubSingleUser;

  constructor() {
    this.unsubUserList = this.subUserList();

    // this.unsubUserList();
  }

  subUserList() {
    return onSnapshot(collection(this.firestore, 'users'), list => {
      list.forEach(element => {
        this.users.push();
      })
    })
  }
}
