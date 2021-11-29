import {Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMousehover]'
})
export class MousehoverDirective {
  constructor(private elRef: ElementRef) { }
  
  @HostListener('mouseover') onMouseOver() {
    this.bgcolor('grey');
    
  }
  @HostListener('mouseout') onMouseOut() {
    this.bgcolor('white');
    
  }

  private bgcolor(color: string) {
    this.elRef.nativeElement.style.backgroundColor = color;
  }
  
} 
