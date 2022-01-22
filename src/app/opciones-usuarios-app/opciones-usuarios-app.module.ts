import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesUsuariosAppPageRoutingModule } from './opciones-usuarios-app-routing.module';

import { OpcionesUsuariosAppPage } from './opciones-usuarios-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesUsuariosAppPageRoutingModule
  ],
  declarations: [OpcionesUsuariosAppPage]
})
export class OpcionesUsuariosAppPageModule {}
