import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Myservice {
  constructor() {}

  getMessage(): string {
    return 'Hello from Myservice!';
  }
}
