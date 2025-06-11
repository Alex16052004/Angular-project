import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  imports: [],
  templateUrl: './eventbinding.html',
  styleUrl: './eventbinding.css',
})
export class Eventbinding {
  click: any;
  text: any;
  product: any;

  clickButton() {
    this.click = 'Welcome to skyvo technology';
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
    this.text = (input.value);
  }
   
  addToCart(product: any) {
    console.log('Added to cart:', product);
  }
}
