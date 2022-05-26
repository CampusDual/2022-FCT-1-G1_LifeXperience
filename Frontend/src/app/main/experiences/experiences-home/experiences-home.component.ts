import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences-home',
  templateUrl: './experiences-home.component.html',
  styleUrls: ['./experiences-home.component.css']
})
export class ExperiencesHomeComponent implements OnInit {

  isListLayout:Boolean = true;

  buttonChangeLayoutText:String = "Grid Layout";
  buttonChangeLayoutIcon:String = "grid_view"
  
  
  constructor() { }

  ngOnInit() {
  }

  changeLayout(){
    console.log("Metodo ejecutado")
    this.isListLayout = !this.isListLayout;
    this.changeTitleButtonGrid();
  }

  //Operador ternario, igual que if-else
  changeTitleButtonGrid(){

     if(this.isListLayout){
      this.buttonChangeLayoutText = "Grid Layout";
      this.buttonChangeLayoutIcon = "grid_view"
     }else{
      this.buttonChangeLayoutText = "List Layout";
       this.buttonChangeLayoutIcon = "view_list"
      
     }
  }
  

}
