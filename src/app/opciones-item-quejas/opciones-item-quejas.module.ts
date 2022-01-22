import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesItemQuejasPageRoutingModule } from './opciones-item-quejas-routing.module';

import { OpcionesItemQuejasPage } from './opciones-item-quejas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesItemQuejasPageRoutingModule
  ],
  declarations: [OpcionesItemQuejasPage]
})
export class OpcionesItemQuejasPageModule {}
