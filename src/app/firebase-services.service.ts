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

  }

  ngOnDestroy() {
    // this.unsubUserList();
  }

  subUserList() {
    return onSnapshot(this.getUserRef(), list => {
      list.forEach(element => {
        console.log(this.toJson(element.data(), element.id));
      })
    })
  }

  async saveUser() {
    this.loading = true;
    this.user.birthday = this.birthday.getTime();
    await addDoc(this.getUserRef(), this.toJson(this.user)).catch(
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

  toJson(obj: any, id?: string): User {
    return {
        id: id || "",
        firstName: obj.firstName || "",
        lastName: obj.lastName || "",
        email: obj.email || "",
        birthday: obj.birthday || 0,
        street: obj.street || "",
        zipCode: obj.zipCode || 0,
        city: obj.city || ""
    }
  }
}
