import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesSeguimientoItemPageRoutingModule } from './opciones-seguimiento-item-routing.module';

import { OpcionesSeguimientoItemPage } from './opciones-seguimiento-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesSeguimientoItemPageRoutingModule
  ],
  declarations: [OpcionesSeguimientoItemPage]
})
export class OpcionesSeguimientoItemPageModule {}
