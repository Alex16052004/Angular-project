import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Myservice } from '../myservice';

@Component({
  selector: 'app-employee-list',
  providers: [Myservice],
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employee: any[] = []
  constructor(private myservice: Myservice) {}

  ngOnInit() {
    this.employee = this.myservice.getEmployee();
  }
}

