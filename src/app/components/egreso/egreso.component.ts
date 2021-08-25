import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from 'src/app/models/egreso.model';
import { EgresoServicio } from 'src/app/services/egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styles: [
  ]
})
export class EgresoComponent implements OnInit {

  public egresos: Egreso[] = [];
  @Input() public ingresoTotal: number = 0;

  constructor(
    private egresoService: EgresoServicio
  ){

  }

  ngOnInit(): void {
    this.egresos = this.egresoService.egresos;
  }

  eliminarEgreso(egreso: Egreso){
    this.egresoService.eliminarEgreso(egreso);
  }

  calcularPorcentaje(egreso: Egreso){
    return egreso.valor / this.ingresoTotal;
  }

}
