import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesCatPageRoutingModule } from './opciones-cat-routing.module';

import { OpcionesCatPage } from './opciones-cat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesCatPageRoutingModule
  ],
  declarations: [OpcionesCatPage]
})
export class OpcionesCatPageModule {}
