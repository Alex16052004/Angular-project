import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Myservice {
  constructor() {}

  getMessage(): string {
    return 'Hello from Myservice!';
  }

  getEmployee() {
    return [
      {id: 1, "Name": "Alex", "Age": 21},
      {id: 2, "Name": "Purab", "Age": 21},
      {id: 3, "Name": "Pankaj", "Age": 21},
    ];
  }
}
