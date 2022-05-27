import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiences-home',
  templateUrl: './experiences-home.component.html',
  styleUrls: ['./experiences-home.component.css']
})
export class ExperiencesHomeComponent implements OnInit {

  isListLayout:Boolean = true;

  buttonChangeLayoutText:String = "Grid Layout";
  buttonChangeLayoutIcon:String = "grid_view"
  
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeLayout(){
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

  public openAccountDetailSelected(id:String) {
      this.router.navigate(['main/experiences/' + id]);
  }

  //El cargado es muy lento

}
