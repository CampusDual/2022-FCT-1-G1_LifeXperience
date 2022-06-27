import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwModalWindowComponent } from './jw-modal-window';
import { JWModalAttributesDirective } from './jw-modal-window-attributes.directive';
import { ListPaginatorComponent } from './list-paginator/list-paginator.component';



@NgModule({
  declarations: [
    JwModalWindowComponent,
    JWModalAttributesDirective,
    ListPaginatorComponent,
  ],
  imports: [
    CommonModule
  ],exports:[
    JwModalWindowComponent,
    JWModalAttributesDirective,
    ListPaginatorComponent,
  ]
})
export class UiElementsModule { }
