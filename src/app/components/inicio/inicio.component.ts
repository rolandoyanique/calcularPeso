import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> ba9c2cf707c0f5a698bad1e75e2475b63e150508

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
<<<<<<< HEAD
constructor(private router:Router){}
=======
>>>>>>> ba9c2cf707c0f5a698bad1e75e2475b63e150508
cambiarAltura(event:any){
  this.altura=event.target.value;
}
masculino(){
  this.sexo='masculino';
}
femenino(){
  this.sexo='femenino';
}
<<<<<<< HEAD
calcularBMI(){
  this.router.navigate(['/resultado'])
}
}
=======
}
>>>>>>> ba9c2cf707c0f5a698bad1e75e2475b63e150508
