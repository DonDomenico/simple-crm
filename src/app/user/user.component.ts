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
import { FirebaseServicesService } from '../firebase-services.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatDialogClose, MatCardModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  firebase = inject(FirebaseServicesService);

  constructor(public dialog: MatDialog) {

  }

  openDialog() {
    this.dialog.open(AddUserDialogComponent);
  }
}