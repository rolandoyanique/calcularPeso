import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  BMI: number = 0;
  resultado: string ='';
  interpretacion: string ='';
constructor(router: ActivatedRoute) {
  
  this.BMI = +router.snapshot.paramMap.get('valor')!;
  console.log(this.BMI);
}
ngOnInit(): void {
  this.getResultado();
}
getResultado(): string {
  if (this.BMI >= 25) {
    this.resultado = 'Sobrepeso';
    this.interpretacion = 'Tienes un peso corporal más alto de lo normal. Intenta hacer más ejercicio.';
  } else if (this.BMI > 18.5) {
    this.resultado = 'Normal';
    this.interpretacion = 'Tienes un peso corporal normal. ¡Buen trabajo!';
  } else {
    this.resultado = 'Bajo peso';
    this.interpretacion = 'Tienes un peso corporal más bajo de lo normal. Intenta comer más.';
  }
  return this.resultado;
}
}