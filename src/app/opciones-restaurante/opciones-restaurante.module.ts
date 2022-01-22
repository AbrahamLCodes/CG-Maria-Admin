import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesRestaurantePageRoutingModule } from './opciones-restaurante-routing.module';

import { OpcionesRestaurantePage } from './opciones-restaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesRestaurantePageRoutingModule
  ],
  declarations: [OpcionesRestaurantePage]
})
export class OpcionesRestaurantePageModule {}
