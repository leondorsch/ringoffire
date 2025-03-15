import { Component } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent {
  allProfilePictures = ['1.webp', '2.png', 'monkey.png', 'pinguin.svg'];
name: any;

  constructor(public  dialogRef: MatDialogRef<EditPlayerComponent>){

  }
}
