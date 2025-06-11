import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  imports: [CommonModule],
  templateUrl: './for-directive.html',
  styleUrl: './for-directive.css',
})
export class ForDirective {
  items = ['Apple', 'Banana', 'Cherry'];
}
