import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SucursalesRestaurantePageRoutingModule } from './sucursales-restaurante-routing.module';

import { SucursalesRestaurantePage } from './sucursales-restaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SucursalesRestaurantePageRoutingModule
  ],
  declarations: [SucursalesRestaurantePage]
})
export class SucursalesRestaurantePageModule {}
