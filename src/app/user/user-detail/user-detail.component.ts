import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.class';
import { collection, doc, Firestore, onSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  firestore = inject(Firestore);
  userId: any;
  user: User = new User();
  unsubSingleUser;
  

  constructor(route: ActivatedRoute) {
    route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      console.log(this.userId);
    })
    // unsubSingleUser could only be executed, if we have the userId. Therefore it has to be executed after the getId function.
    this.unsubSingleUser = this.subSingleUser();
  }

  ngOnDestroy() {
    this.unsubSingleUser();
  }

  subSingleUser() {
    return onSnapshot(this.getSingleUserRef(), element => {
      // console.log(element.data(), element.id);
      this.user = this.toJson(element.data());
      this.user.birthday = new Date(this.user.birthday);
      console.log(this.user);
    })
  }

  getSingleUserRef() {
    return doc(collection(this.firestore, 'users'), this.userId);
  }

  toJson(obj: any, id?: string): User {
    return {
      id: id || "",
      firstName: obj.firstName || "",
      lastName: obj.lastName || "",
      email: obj.email || "",
      birthday: obj.birthday || "",
      street: obj.street || "",
      zipCode: obj.zipCode || "",
      city: obj.city || ""
    }
  }
}
