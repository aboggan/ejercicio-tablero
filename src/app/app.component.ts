import { Component , OnInit } from '@angular/core';
import { ApiService } from "./api.service"
import { MyNewInterface } from "./my-new-interface";
import { error } from 'util';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})
export class AppComponent implements OnInit{
  title = 'app';

  _postsArray: MyNewInterface[];

  constructor(private apiSerivce: ApiService){}

  getPosts(): void {
    this.apiSerivce.getPosts().
    subscribe(
       resultArray => this._postsArray =
       resultArray,
       error => console.log("Error :: " + error ))
  }
  ngOnInit(): void{
    this.getPosts();

  }
  mostrarSeccion(id) {
    
    const seccion = "#seccion-id-"+id;
    
    $(".seccion-list button").removeClass("active");
    $("#btn-id-"+id).addClass("active");

    $(".detalle-secciones").hide();
    $(seccion).show();   
    
    $(".boton-mas").show();

  }
}
