import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteIngresosPageRoutingModule } from './reporte-ingresos-routing.module';

import { ReporteIngresosPage } from './reporte-ingresos.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteIngresosPageRoutingModule,
    ChartsModule
  ],
  declarations: [ReporteIngresosPage]
})
export class ReporteIngresosPageModule {}
