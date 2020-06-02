import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  //Para seleccionar el elemento que necesites manejar
  constructor(private el: ElementRef, private render: Renderer2) { }

  //El host esta atento al evento mouseenter, la funcion que quiero que ejecute  
  @HostListener('mouseenter') onMouseEvent() {
    this.render.setStyle(
      this.el.nativeElement,
      'background',
      'red',
    )
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(
      this.el.nativeElement,
      'background',
      'yellow',
    )
  }
}

