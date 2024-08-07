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
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FirebaseServicesService } from '../firebase-services.service';

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
  firebase = inject(FirebaseServicesService);
  
  constructor(public dialogRef: MatDialogRef<AddUserDialogComponent>) { 
    
  }
}
