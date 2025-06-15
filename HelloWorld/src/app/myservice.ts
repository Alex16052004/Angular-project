import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observeOn } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Myservice {
  constructor(private http: HttpClient) {}

  getMessage(): string {
    return 'Hello from Myservice!';
  }

  getEmployee() {
    return [
      { id: 1, Name: 'Alex', Age: 21 },
      { id: 2, Name: 'Purab', Age: 21 },
      { id: 3, Name: 'Pankaj', Age: 21 },
    ];
  }

  getData(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  addProduct(data:any){
    return this.http.post<AddProduct>('https://fakestoreapi.com/products', data)
  }
}

export class Rating {
  rate: number | undefined;
  count: number | undefined;
}

export class Product {
  id: number | undefined;
  title: string | undefined;
  price: number | undefined;
  description: string | undefined;
  category: string | undefined;
  image: string | undefined;
  rating: Rating | undefined;
}

export class AddProduct {
  id!: number;
  title!: string;
  price!: number;
  descripition!: string;
  category!: string;
  image!: string;
}