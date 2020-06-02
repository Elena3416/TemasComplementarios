import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre2',
  templateUrl: './padre2.component.html',
  styles: []
})

export class Padre2Component implements OnInit {

  public numero: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public Sumar() {
    this.numero++;
  }

  public Restar() {
    this.numero--;
  }

  public RecibirDato(valor: number) {
    this.numero = valor;
  }
}
