import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesIngresosItemPageRoutingModule } from './opciones-ingresos-item-routing.module';

import { OpcionesIngresosItemPage } from './opciones-ingresos-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesIngresosItemPageRoutingModule
  ],
  declarations: [OpcionesIngresosItemPage]
})
export class OpcionesIngresosItemPageModule {}
