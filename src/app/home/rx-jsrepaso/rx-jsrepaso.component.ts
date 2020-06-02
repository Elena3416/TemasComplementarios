import { Component, OnInit } from '@angular/core';
import { of, pipe } from 'rxjs'
import { map, filter, mapTo } from 'rxjs/operators'
//of es una función

@Component({
  selector: 'app-rx-jsrepaso',
  templateUrl: './rx-jsrepaso.component.html',
  styles: [
  ]
})
export class RxJSRepasoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //operador MAP (Realizar una operación matemática y retorna una observable)
    //Map es un operador de transformación
    const arrayNums = of(1,2,3,4,5,6,7,8,9,10)
    const palabras = of('abc','def','ghi','azd')
    let palabrasconA:Array<string> = []
    let arrayPares:Array<number> = []
    const raiz = pipe(
      filter((numero:number)=> (numero%2 == 0)),
      map(n =>{
        arrayPares.push(n * n)
        console.log(arrayPares);
      })
    )

    const numeroSalida = raiz(arrayNums)
    numeroSalida.subscribe(subs => console.log(subs))

    const procesar = pipe(
      filter((palabra:string) => (palabra.slice(0,1) === 'a')),
      map(palabra =>{
        palabrasconA.push(palabra.toUpperCase())
      })
   )

   const salida = procesar(palabras)
   salida.subscribe(array => console.log(palabrasconA))

   //switchMap != MAP (destruye una subscripcion despues de obtener una salida)
   

   //MapTo Toma cualquier emisión y regresa un valor constante

   const numeroMapeados = pipe(mapTo(0))
   const salida1 = numeroMapeados(arrayNums)
   salida1.subscribe(v => console.log(v)
   )

  }

}
