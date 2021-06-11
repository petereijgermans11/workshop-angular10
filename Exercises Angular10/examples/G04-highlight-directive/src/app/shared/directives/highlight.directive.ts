// Credits: https://angular.io/guide/attribute-directives#attribute-directives
import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[myHighlight]',
})
export class HighlightDirective {
  @Input('myHighlight') highlightColor: string;
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.highlightColor || 'cyan');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('white');
  }

  // private function.
  private highlight(color: string) {
    this.el.style.textShadow = '1px 1px 2px ' + color;
  }
}
