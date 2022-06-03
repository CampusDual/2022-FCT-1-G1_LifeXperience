import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience-boxes-home',
  templateUrl: './experience-boxes-home.component.html',
  styleUrls: ['./experience-boxes-home.component.css']
})
export class ExperienceBoxesHomeComponent implements OnInit {

  isListLayout:Boolean = true;

  buttonChangeLayoutText:String = "Grid";
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
      this.buttonChangeLayoutText = "Grid";
      this.buttonChangeLayoutIcon = "grid_view"
     }else{
      this.buttonChangeLayoutText = "List";
       this.buttonChangeLayoutIcon = "view_list"
     }
  }

  public openAccountDetailSelected(id:String) {
      this.router.navigate(['main/experiences/' + id]);
  }


}
