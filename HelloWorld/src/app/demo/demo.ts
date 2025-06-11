import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Myservice } from '../myservice';

@Component({
  selector: 'app-demo',
  imports: [FormsModule, CommonModule],
  providers: [Myservice],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo implements OnChanges, OnInit, AfterViewInit{

  constructor(private myservice: Myservice){
    
  }

  @ViewChild('inputRef') inputElement!: ElementRef;

  ngAfterViewInit(): void {
    console.log('ngAfterviewInit called');
    this.inputElement.nativeElement.focus(); //DOM is ready here
  }

  users: any[] = [];
  msg: any;
  ngOnInit() {
    console.log('ngOnInit - component initialized');
    this.msg = this.myservice.getMessage();
    this.loadData();
  }

  loadData(): void{
    //sample static data to simulate loading from API
    this.users = [
      {id: 1, name: 'John Doe', email: 'john@example.com'},
      {id: 2, name: 'Jane Smith', email: 'jane@example.com'},
      {id: 3, name: 'Alice Johnson', email: 'alice@example.com'},
    ];
    console.log('Data loaded:', this.users); 
  }

  @Input() message!: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges - title chnaged:', changes['message']);
  }

  //child.component.ts
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from Child');
  }
}
