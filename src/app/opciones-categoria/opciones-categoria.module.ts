import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesCategoriaPageRoutingModule } from './opciones-categoria-routing.module';

import { OpcionesCategoriaPage } from './opciones-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesCategoriaPageRoutingModule
  ],
  declarations: [OpcionesCategoriaPage]
})
export class OpcionesCategoriaPageModule {}
