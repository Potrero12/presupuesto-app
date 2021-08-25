import { Injectable } from "@angular/core";

import { Ingreso } from "../models/ingreso.model";

@Injectable()
export class IngresoServicio {

    public ingresos: Ingreso[] = [];

    

    eliminarRegistro(ingreso: Ingreso){
        const indice: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice, 1);

    }

}