import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
constructor(private router:Router){}
cambiarAltura(event:any){
  this.altura=event.target.value;
}
masculino(){
  this.sexo='masculino';
}
femenino(){
  this.sexo='femenino';
}
calcularBMI(){
  const BMI =(this.peso/Math.pow(this.altura/100,2)).toFixed(1);
  console.log(BMI);
  this.router.navigate(['/resultado',BMI])
}
}

