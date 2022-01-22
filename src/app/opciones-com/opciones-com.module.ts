import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesComPageRoutingModule } from './opciones-com-routing.module';

import { OpcionesComPage } from './opciones-com.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesComPageRoutingModule
  ],
  declarations: [OpcionesComPage]
})
export class OpcionesComPageModule {}
