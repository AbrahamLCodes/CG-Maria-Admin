import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesMenuPageRoutingModule } from './opciones-menu-routing.module';

import { OpcionesMenuPage } from './opciones-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesMenuPageRoutingModule
  ],
  declarations: [OpcionesMenuPage]
})
export class OpcionesMenuPageModule {}
