import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicacionNumerica'
})
export class MultiplicacionNumericaPipe implements PipeTransform {

  transform(value: number, multiplicar:number): number {
    return value * multiplicar;
  }
}