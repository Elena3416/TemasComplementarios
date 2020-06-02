import { Directive, ElementRef } from '@angular/core';
import { timer } from 'rxjs';
import { map } from "rxjs/operators";

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective {

  private ArrayColors: Array<string> = ['blue', 'red', 'purple', 'green', 'brown', 'pink'];

  constructor(private el: ElementRef) {
    this.ChangeColor();
  }

  public ChangeColor() {
    timer(0, 2000) //cada cierto tiempo se cambia de color
      .pipe(
        map(() => {
          let NumeroAleatorio = Math.floor(Math.random() * this.ArrayColors.length - 0) - 0;
          console.log(NumeroAleatorio);
          return this.ArrayColors[NumeroAleatorio];
          //Se utiliza numeros random para cambiar de color del cuadro.
        })
      ).subscribe((color) => {
        this.el.nativeElement.style.background = color;
        // se utiliza la propiedad para imprimir los colores en forma de colores
      });
  }
}

/*directiva es una clase de typescript, que modifica los atributos de html y ayuda a modificar
la estructura de la etiqueta seleccionada elementoref sirve para tomar los valores e imprimirlos*/