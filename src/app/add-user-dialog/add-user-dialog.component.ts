import { Component, inject } from '@angular/core';
import {
  MatDialogContent,
  MatDialogActions,
  MatDialogRef,
  MatDialogClose
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {
  FormsModule, 
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../models/user.class';
import { addDoc, collection, doc, Firestore } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-add-user-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatInputModule, MatDialogClose, MatButtonModule, FormsModule, MatFormFieldModule, MatDatepickerModule, ReactiveFormsModule, MatProgressBarModule],
  templateUrl: './add-user-dialog.component.html',
  styleUrl: './add-user-dialog.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class AddUserDialogComponent {
  user = new User;
  birthday!: Date;
  firestore = inject(Firestore);
  loading = false;

  constructor(public dialogRef: MatDialogRef<AddUserDialogComponent>) { 
    
  }

  async saveUser() {
    this.loading = true;
    if(this.user.birthday != null) {
      this.user.birthday = this.birthday.getTime();
    }
    await addDoc(this.getUserRef(), this.user.toJson()).catch(
      (err) => {console.error(err)}
    ).then(
      () => {
        this.loading = false;
        this.dialogRef.close(console.log(this.user));
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
