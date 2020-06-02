import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkexistImage'
})
export class CheckexistImagePipe implements PipeTransform {

  transform(value: string): string {
   
    if(value){
      return value;
    }else{
      return `./../../../assets/IMG/Imagenotfound.png`;
    }
  }
}
