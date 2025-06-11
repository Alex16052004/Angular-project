import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  onsubmit() {
    console.log(this.name, this.email, this.password);
  }
  name = ' ';
  email = ' ';
  password = ' ';
}
