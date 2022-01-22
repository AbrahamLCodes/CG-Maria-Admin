import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesCuponesPageRoutingModule } from './opciones-cupones-routing.module';

import { OpcionesCuponesPage } from './opciones-cupones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesCuponesPageRoutingModule
  ],
  declarations: [OpcionesCuponesPage]
})
export class OpcionesCuponesPageModule {}
