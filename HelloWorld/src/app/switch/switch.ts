import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch',
  imports: [CommonModule, FormsModule],
  templateUrl: './switch.html',
  styleUrl: './switch.css',
})
export class Switch {
  selectorColor = ' ';
}
