import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FidelizacionPageRoutingModule } from './fidelizacion-routing.module';

import { FidelizacionPage } from './fidelizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FidelizacionPageRoutingModule
  ],
  declarations: [FidelizacionPage]
})
export class FidelizacionPageModule {}
