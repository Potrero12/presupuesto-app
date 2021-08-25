import { Injectable } from "@angular/core";

import { Egreso } from "../models/egreso.model";

@Injectable()
export class EgresoServicio {

    public egresos: Egreso[] = [];

    eliminarEgreso(egreso: Egreso){
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice, 1)
    }

}