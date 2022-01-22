import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesSeguimientoPageRoutingModule } from './opciones-seguimiento-routing.module';

import { OpcionesSeguimientoPage } from './opciones-seguimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesSeguimientoPageRoutingModule
  ],
  declarations: [OpcionesSeguimientoPage]
})
export class OpcionesSeguimientoPageModule {}
