import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.elem.nativeElement.style.color = 'blue';
    this.elem.nativeElement.style.cursor = 'pointer';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elem.nativeElement.style.color = 'white';
    this.elem.nativeElement.style.cursor = 'none';
  }
}
