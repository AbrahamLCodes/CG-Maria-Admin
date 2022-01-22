import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesPromosPageRoutingModule } from './opciones-promos-routing.module';

import { OpcionesPromosPage } from './opciones-promos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesPromosPageRoutingModule
  ],
  declarations: [OpcionesPromosPage]
})
export class OpcionesPromosPageModule {}
