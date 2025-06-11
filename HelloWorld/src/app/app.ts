import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Register } from './register/register';
import { CommonModule } from '@angular/common';
import { Interpolation } from './interpolation/interpolation';
import { Property } from './property/property';
import { ClassBinding } from './class/class';
import { Stylebinding } from './stylebinding/stylebinding';
import { Eventbinding } from './eventbinding/eventbinding';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { HighlightDirective } from './highlight-directive';
import { Switch } from './switch/switch';
import { Form } from './form/form';
import { ForDirective } from './for-directive/for-directive';
import { Demo } from './demo/demo';
import { Pipes } from './pipes/pipes';
import { FormsModule } from '@angular/forms';
import { Myservice } from './myservice';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Register,
    CommonModule,
    Interpolation,
    Property,
    ClassBinding,
    Stylebinding,
    Eventbinding,
    TwoWayBinding,
    HighlightDirective,
    Switch,
    Form,
    ForDirective,
    Demo,
    Pipes,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'HelloWorld';
  protected head = 'Hi, I am Alex';

  firstname = 'Alex';
  lastname = 'Tigga';
  imageurl = 'favicon.ico';

  currentClass = 'text-blue';

  isActive = false;
  isHighlighted = true;
  isError = true;
  name = 'papa ka data';

  childmsg: any;

  //parent.coponent.ts
  receiveMessage(msg: string) {
    console.log(msg);
    this.childmsg = msg;
  }
}
