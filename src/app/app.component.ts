import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase02';
  nombre="";
  apellido="";
  concatenado="";

  concatenar(){
    this.concatenado=this.nombre + " " + this.apellido;
  }
}
