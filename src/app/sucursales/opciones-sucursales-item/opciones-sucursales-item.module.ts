import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesSucursalesItemPageRoutingModule } from './opciones-sucursales-item-routing.module';

import { OpcionesSucursalesItemPage } from './opciones-sucursales-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesSucursalesItemPageRoutingModule
  ],
  declarations: [OpcionesSucursalesItemPage]
})
export class OpcionesSucursalesItemPageModule {}
