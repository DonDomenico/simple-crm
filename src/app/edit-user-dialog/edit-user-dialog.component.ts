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
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FirebaseServicesService } from '../firebase-services.service';

@Component({
  selector: 'app-edit-user-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatInputModule, MatDialogClose, MatButtonModule, FormsModule, MatFormFieldModule, MatDatepickerModule, ReactiveFormsModule, MatProgressBarModule],
  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class EditUserDialogComponent {
  firebase = inject(FirebaseServicesService);

  constructor(public dialogRef: MatDialogRef<EditUserDialogComponent>) {

  }

  closeDialog() {
    this.dialogRef.close();
  }
}
