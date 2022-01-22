import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesItemUsuarioPageRoutingModule } from './opciones-item-usuario-routing.module';

import { OpcionesItemUsuarioPage } from './opciones-item-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesItemUsuarioPageRoutingModule
  ],
  declarations: [OpcionesItemUsuarioPage]
})
export class OpcionesItemUsuarioPageModule {}
