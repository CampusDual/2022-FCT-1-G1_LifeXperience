import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'jw-modal[modal-width], jw-modal[modal-height], jw-modal[modal-margin]'
})
export class JWModalAttributesDirective {

  constructor(private el: ElementRef) { 
    this.el = el
  }

  //The next input are the new attributes for de jw-modal component that affect to the jw-model body
  //The input is the same as it was css 
  @Input("modal-width") width: string;
  @Input("modal-height") height: string;
  @Input("modal-margin") margin : string;
  
  
  ngOnInit(): void {
    var modalBody = this.el.nativeElement.querySelector('.jw-modal-body');


    if (this.width) {
      modalBody.style.width = this.width;
    }

    if(this.margin){
      modalBody.style.margin = this.margin;
    }

    if (this.height) {
      modalBody.style.height = this.height;
    }
  }
}
