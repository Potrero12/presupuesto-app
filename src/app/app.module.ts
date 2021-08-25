import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CabeceroComponent } from './components/cabecero/cabecero.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { EgresoComponent } from './components/egreso/egreso.component';
import { FormularioComponent } from './components/formulario/formulario.component';

import { IngresoServicio } from './services/ingreso.service';
import { EgresoServicio } from './services/egreso.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    IngresoComponent,
    EgresoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IngresoServicio, EgresoServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
