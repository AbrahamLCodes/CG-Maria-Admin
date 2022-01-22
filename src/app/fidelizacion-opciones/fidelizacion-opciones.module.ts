import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FidelizacionOpcionesPageRoutingModule } from './fidelizacion-opciones-routing.module';

import { FidelizacionOpcionesPage } from './fidelizacion-opciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FidelizacionOpcionesPageRoutingModule
  ],
  declarations: [FidelizacionOpcionesPage]
})
export class FidelizacionOpcionesPageModule {}
