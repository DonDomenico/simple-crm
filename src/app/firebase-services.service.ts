import { inject, Injectable } from '@angular/core';
import { doc, onSnapshot } from "firebase/firestore";
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { User } from './models/user.class';


@Injectable({
  providedIn: 'root'
})
export class FirebaseServicesService {
  firestore = inject(Firestore);
  user = new User();
  users: User[] = [];
  unsubUserList;
  // unsubSingleUser;
  birthday!: Date;
  loading = false;

  constructor() {
    this.unsubUserList = this.subUserList();

    // this.unsubUserList();
  }

  subUserList() {
    return onSnapshot(this.getUserRef(), list => {
      list.forEach(element => {
        this.users.push();
      })
    })
  }

  async saveUser() {
    this.loading = true;
    if (this.user.birthday != null) {
      this.user.birthday = this.birthday.getTime();
    }
    await addDoc(this.getUserRef(), this.user.toJson()).catch(
      (err) => { console.error(err) }
    ).then(
      () => {
        this.loading = false;
        console.log(this.user);
      }
    );
  }

  getUserRef() {
    return collection(this.firestore, 'users');
  }

  getSingleUserRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}
