import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesUsuariosSistemaItemPageRoutingModule } from './opciones-usuarios-sistema-item-routing.module';

import { OpcionesUsuariosSistemaItemPage } from './opciones-usuarios-sistema-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesUsuariosSistemaItemPageRoutingModule
  ],
  declarations: [OpcionesUsuariosSistemaItemPage]
})
export class OpcionesUsuariosSistemaItemPageModule {}
