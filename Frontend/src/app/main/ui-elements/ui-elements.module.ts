import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModalWindowComponent } from './ui-modal-window';



@NgModule({
  declarations: [
    UiModalWindowComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    UiModalWindowComponent
  ]
})
export class UiElementsModule { }
