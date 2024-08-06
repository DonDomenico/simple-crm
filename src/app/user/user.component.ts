import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  MatDialog,
  MatDialogClose,
} from '@angular/material/dialog';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { doc, onSnapshot } from "firebase/firestore";
import { collection, Firestore } from '@angular/fire/firestore';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatDialogClose, MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user = new User();
  firestore = inject(Firestore);
  users: User[] = [];
  unsubUserList;
  // unsubSingleUser;

  constructor(public dialog: MatDialog) {
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

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserDialogComponent);
  }
}