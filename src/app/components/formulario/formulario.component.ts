import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from 'src/app/models/egreso.model';

import { Ingreso } from 'src/app/models/ingreso.model';

import { EgresoServicio } from 'src/app/services/egreso.service';
import { IngresoServicio } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {

  public tipo: string = 'ingresoOperacion';
  public descripcionInput: string = '';
  public valorInput: number = 0;

  constructor(
    private ingresoServicio: IngresoServicio,
    private egresoServicio: EgresoServicio
  ){

  }

  ngOnInit(): void {
  }

  tipoOperacion(evento: any){
    this.tipo = evento.target.value;
  }

  agregarValor(){
    if(this.tipo === 'ingresoOperacion'){
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    } else {
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    }
  }

}
