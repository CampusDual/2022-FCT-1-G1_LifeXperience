import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwModalWindowComponent } from './jw-modal-window';
import { JWModalAttributesDirective } from './jw-modal-window-attributes.directive';



@NgModule({
  declarations: [
    JwModalWindowComponent,
    JWModalAttributesDirective
  ],
  imports: [
    CommonModule
  ],exports:[
    JwModalWindowComponent,
    JWModalAttributesDirective
  ]
})
export class UiElementsModule { }
