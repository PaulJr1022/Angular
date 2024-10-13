import { Directive, ElementRef, HostListener, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]',
  standalone: true
})
export class TextHighlightDirective {

  constructor(private el : ElementRef) { }

  // @HostListener () textHighlight(){
  //   this.el.nativeElement.
  // }
  @Input ('appTextHighlight') title! : string;

  ngOnChanges(changes : SimpleChanges) {
    if('title' in changes){
      this.highlightText();
    }
  }

  private highlightText() {
    const text = this.el.nativeElement.innerText;
    if(!this.title || this.title.trim()) {
      this.el.nativeElement.innerHTML = text;
      return;
    }

    const regex = new RegExp(this.title, 'gi');
    const highlightText = text.replace(regex, (match : string) => `<mark>${match}</mark>`);
    this.el.nativeElement.innerHTML = highlightText;
  
  }

}
