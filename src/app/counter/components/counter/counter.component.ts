import { Component } from "@angular/core";


@Component({
  selector: 'app-CounterComponent',
  template:`
  <h1>{{title}}</h1>
  <p>{{counter}}</p>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>`
})

export class CounterComponent {

  public title:string = 'bases';
  public counter:number = 10;

  constructor() {

  }

  increaseBy(value:number):void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 10;
  }
}


