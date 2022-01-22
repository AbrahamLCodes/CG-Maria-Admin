import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesUsuariosSistemaPageRoutingModule } from './opciones-usuarios-sistema-routing.module';

import { OpcionesUsuariosSistemaPage } from './opciones-usuarios-sistema.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesUsuariosSistemaPageRoutingModule
  ],
  declarations: [OpcionesUsuariosSistemaPage]
})
export class OpcionesUsuariosSistemaPageModule {}
