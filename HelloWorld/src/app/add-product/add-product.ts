import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Myservice, Product } from '../myservice';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {

  constructor(private myservice:Myservice){}
    signupModel: any={};
    data:any

    onSubmit(){
      console.log('Product Submitted:', this.signupModel);
      this.myservice.addProduct(this.signupModel).subscribe(data=>{
        this.data = data;
        alert(JSON.stringify(this.signupModel));
      })
    }
}