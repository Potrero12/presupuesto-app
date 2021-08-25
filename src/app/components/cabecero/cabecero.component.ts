import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styles: [
  ]
})
export class CabeceroComponent implements OnInit {

  @Input() public presupuesto: number = 0;
  @Input() public ingresoTotal: number = 0;
  @Input() public egresoTotal: number = 0;
  @Input() public porcentajeTotal: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
