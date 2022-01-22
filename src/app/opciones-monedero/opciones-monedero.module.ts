import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesMonederoPageRoutingModule } from './opciones-monedero-routing.module';

import { OpcionesMonederoPage } from './opciones-monedero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesMonederoPageRoutingModule
  ],
  declarations: [OpcionesMonederoPage]
})
export class OpcionesMonederoPageModule {}
