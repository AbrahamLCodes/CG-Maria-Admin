import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesSucursalesPageRoutingModule } from './opciones-sucursales-routing.module';

import { OpcionesSucursalesPage } from './opciones-sucursales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesSucursalesPageRoutingModule
  ],
  declarations: [OpcionesSucursalesPage]
})
export class OpcionesSucursalesPageModule {}
