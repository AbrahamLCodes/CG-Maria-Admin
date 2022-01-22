import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesQuejasPageRoutingModule } from './opciones-quejas-routing.module';

import { OpcionesQuejasPage } from './opciones-quejas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesQuejasPageRoutingModule
  ],
  declarations: [OpcionesQuejasPage]
})
export class OpcionesQuejasPageModule {}
