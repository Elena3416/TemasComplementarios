import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changePassword'
})
export class ChangePasswordPipe implements PipeTransform {

  transform(value: string, mostrar: boolean): string {
    if (mostrar) {
      return value;
    } else {

      let contraseniaHidden = "";
      let numeroAsteriscos = value.length;

      for (let i = 0; i < numeroAsteriscos; i++) {
        contraseniaHidden += '*';
      }
      return contraseniaHidden;
    }
  }
}
