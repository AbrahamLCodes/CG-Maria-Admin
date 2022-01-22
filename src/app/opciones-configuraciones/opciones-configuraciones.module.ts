import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesConfiguracionesPageRoutingModule } from './opciones-configuraciones-routing.module';

import { OpcionesConfiguracionesPage } from './opciones-configuraciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesConfiguracionesPageRoutingModule
  ],
  declarations: [OpcionesConfiguracionesPage]
})
export class OpcionesConfiguracionesPageModule {}
