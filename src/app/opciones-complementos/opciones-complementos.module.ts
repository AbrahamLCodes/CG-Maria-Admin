import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesComplementosPageRoutingModule } from './opciones-complementos-routing.module';

import { OpcionesComplementosPage } from './opciones-complementos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesComplementosPageRoutingModule
  ],
  declarations: [OpcionesComplementosPage]
})
export class OpcionesComplementosPageModule {}
