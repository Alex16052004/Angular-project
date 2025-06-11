import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TruncateCustomPipe } from '../truncate-custom-pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,TruncateCustomPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {
  public name = 'AlexTigga';
  public message = 'Welcome to skyvo technology';
  public person = {
    firstname:'John',
    lastname:'Doe',
  };
  public date =  new Date();

}
