import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  @Input() name: any;
  @Input() image = '1.webp';
  @Input() playerActive:boolean = false;
}
