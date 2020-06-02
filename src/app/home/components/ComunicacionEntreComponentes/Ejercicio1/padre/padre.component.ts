import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styles: [
  ]
})
export class PadreComponent implements OnInit {

  public valorPadre:string;
  public genkidamaImg:string = "";
  
  constructor() { 

  }

  ngOnInit(): void {
  }

  //Metodo para crear valor al padre
  GetValorPadre(valor:string){
    this.valorPadre = valor;
  }

  public EnviarEnergia(EnergiaCompleta:string){
    if(EnergiaCompleta){
      this.genkidamaImg="./../../../../assets/IMG/gato.jpg";
    }
  }
}
