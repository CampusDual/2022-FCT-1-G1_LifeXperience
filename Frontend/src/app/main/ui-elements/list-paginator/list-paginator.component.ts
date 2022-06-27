import { Component, DoCheck, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-paginator',
  templateUrl: './list-paginator.component.html',
  styleUrls: ['./list-paginator.component.css']
})
export class ListPaginatorComponent implements OnInit{
  private isFirstLoad = true;
  private paginatorNumbers: Array<number>;
  private buttonState = [false, true];

  @Input('actual-page') actualPage: number;
  @Input('number-page') numberOfPages: number;
  @Input('paginator-size') paginatorSize: number;

  @Output() actualPageChange = new EventEmitter<number>();
  constructor() {
  }

  ngOnInit() {
    
  }

  //I think that this is necesary because we have to wait that the data of the list it be passed to the component
  //so we need to check if there are changes to upgrate the paginator
  ngOnChanges(changes: SimpleChanges): void {

    if(changes.numberOfPages && changes.numberOfPages.currentValue && this.isFirstLoad){
    this.checkPaginatoSizeForARange();
    this.paginatorNumbers = new Array<number>(this.paginatorSize);
    this.upgradePaginatorPages();

    this.isFirstLoad = false;
    }else if(changes.actualPage && changes.actualPage.currentValue && !this.isFirstLoad){
      this.upgradePaginatorPages();
    }

    console.log(SimpleChange)
    
  }
  
  changeNextOrPreviousPage(direction:number){
    this.changePage(this.actualPage + direction);
  }

  changePage(newPage:number){
   this.actualPage = newPage;
   //Evento emitido
   this.actualPageChange.emit(this.actualPage)
    this.upgradePaginatorPages();
    this.updateArrowButtonsState();
  }

  checkPaginatoSizeForARange(){
    if(!this.numberOfPages){
      throw new Error("It has not specific the number of pages")
    }

    if(!this.paginatorSize){
      this.paginatorSize = 3;
    }

    if(this.paginatorSize > this.numberOfPages){
        this.paginatorSize = this.numberOfPages;
    }
    
  }

  upgradePaginatorPages(){
    this.paginatorNumbers = this.calculatePaginatorNumbers(this.getFirstElementOfPaginator())
  }

  getFirstElementOfPaginator(){

    let amountOfOneSidePaginatorNumbers = Math.floor(this.paginatorSize / 2.0);
    let pageInBoundsInferiorLimit = (this.actualPage >= 0 + amountOfOneSidePaginatorNumbers)
    let pageInBoundsSuperiorLimit = (this.actualPage < this.numberOfPages - amountOfOneSidePaginatorNumbers);
    //TODO:Comprobar
   
    //Get paginator first element
    if(pageInBoundsInferiorLimit && pageInBoundsSuperiorLimit){
      return this.actualPage - amountOfOneSidePaginatorNumbers;

    }else if(!pageInBoundsInferiorLimit && this.actualPage >= 0){
      return 0;

    }else if(!pageInBoundsSuperiorLimit && this.actualPage < this.numberOfPages){
      return this.numberOfPages - this.paginatorSize;
    }
  }


  //TODO:Asignar variables
  calculatePaginatorNumbers(firstElement:number):number[]{
    let paginatorNumbers = new Array<number>();
    for(let i = 0; i < this.paginatorSize ; i++){
      paginatorNumbers.push(firstElement + i);
    }
    return paginatorNumbers;
  }

   //TODO:Revisar logica con la ultima pagina
  
   updateArrowButtonsState() {
    if (this.actualPage == 0) {

      this.buttonState = [false,true];
    } else if (this.actualPage == this.numberOfPages - 1) {
      this.buttonState = [true,false];
    } else {
      this.buttonState = [true, true];
    }
  }
}
