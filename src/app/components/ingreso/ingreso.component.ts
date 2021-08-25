import { Component, OnInit } from '@angular/core';
import { Ingreso } from 'src/app/models/ingreso.model';
import { IngresoServicio } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styles: [
  ]
})
export class IngresoComponent implements OnInit {

  public ingresos: Ingreso[] = [];

  constructor(
    private ingresoService: IngresoServicio
  ){

  }

  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarRegistro(ingreso: Ingreso){
    this.ingresoService.eliminarRegistro(ingreso);
  }

}
