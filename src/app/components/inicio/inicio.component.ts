import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
edad=25;
peso=70;
altura=170;
sexo='masculino';
cambiarAltura(event:any){
  this.altura=event.target.value;
}
masculino(){
  this.sexo='masculino';
}
femenino(){
  this.sexo='femenino';
}
}
