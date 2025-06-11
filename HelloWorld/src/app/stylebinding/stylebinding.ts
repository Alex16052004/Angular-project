import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight-directive';

@Component({
  selector: 'app-stylebinding',
  imports: [CommonModule, HighlightDirective],
  templateUrl: './stylebinding.html',
  styleUrl: './stylebinding.css',
})
export class Stylebinding {
  fontSize = 50;
  hasError = true;
  bgColor = 'red';
  isLoggedIn = false;
  loginBlock = true;
}
