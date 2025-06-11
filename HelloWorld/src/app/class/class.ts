import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  imports: [CommonModule],
  templateUrl: './class.html',
  styleUrl: './class.css',
})
export class ClassBinding {
  isError = true;
  isSuccess = false;
  isItalic = true;
  statusClass = 'highlight';
}
