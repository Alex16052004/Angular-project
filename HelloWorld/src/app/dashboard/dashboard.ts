import { Component, OnInit } from '@angular/core';
import { AddProduct, Myservice, Product } from '../myservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {  
  constructor(private myservice: Myservice) {}
  product: Product[] = [];
  ngOnInit(): void {
    this.myservice.getData().subscribe(data => {
      console.log(data);
      this.product = data;
    })
  }
}
