import { Component } from '@angular/core';
import { Myservice } from '../myservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  providers: [Myservice],
  imports: [CommonModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css'
})
export class EmployeeDetails {
   employee: any[] = []
  constructor(private myservice: Myservice) {}

  ngOnInit() {
    this.employee = this.myservice.getEmployee();
  }
}
