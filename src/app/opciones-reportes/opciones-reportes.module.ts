import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesReportesPageRoutingModule } from './opciones-reportes-routing.module';

import { OpcionesReportesPage } from './opciones-reportes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesReportesPageRoutingModule
  ],
  declarations: [OpcionesReportesPage]
})
export class OpcionesReportesPageModule {}
