import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: []
})

export class PipesComponent implements OnInit {

  public valor: number = 123456;
  public fecha: Date = new Date();
  public ValorPi: number = 0;
  public Texto: string = "LAUrA ElENa RuBaLcaVA De SANtoS";
  public porcentaje = 0.12345;
  public arregloNumerico: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public contrasenia: string = '12345678910Laura';
  public Show: boolean = false;
  public urlImage: string = `./../../../assets/IMG/buho.jpg`;
  public valor1: number = 9;
  public valor2: number = 4;

  constructor() {
    this.ValorPi = Math.PI;
  }

  ngOnInit(): void {
  }

  public MostrarContrasena() {
    /**Llama a la propiedad show e imprime lo contrario es decir un true o false depende 
    cuando se active el checkbox*/
    this.Show = !this.Show;
  }

}
