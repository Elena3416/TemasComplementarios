import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styles: [
  ]
})
export class Hijo2Component implements OnInit {

  @Input()valorPadre:number; 
  @Output()valorHijo = new EventEmitter<number>(); 

  constructor() { }

  ngOnInit(): void {
  }

  public Multiplicacion(){
    this.valorPadre = this.valorPadre * 2;
    this.valorHijo.emit(this.valorPadre);
  }

  public Division(){
    this.valorPadre = this.valorPadre / 2;
    this.valorHijo.emit(this.valorPadre);
  }

}
