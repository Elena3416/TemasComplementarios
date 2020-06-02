import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeColorInput]'
})
export class ChangeColorInputDirective {

  public color: number = 1;

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('keypress') onKeyPress() {
    this.render.setStyle(
      this.el.nativeElement,
      'color',
      this.ChangeColorbyLetter(this.color),
      this.color++,
      )
      console.log(this.color);
  }

  public ChangeColorbyLetter(changecolor: number) {
    switch(changecolor){
      case 1:
        return 'red';
      case 2:
        return 'brown';
      case 3:
        return 'green';
      case 4:
        return 'blue';  
      case 5:
        return 'purple';
      case 6:
        return 'pink';
      case 7:
        return 'grey';
      case 8:
        return 'yellow';   
      case 9:
        return 'orange';
      case 10:
        return 'teal';     
      case 11:
        return 'marron';
      default:
        return 'navy';  
    }
  }
}