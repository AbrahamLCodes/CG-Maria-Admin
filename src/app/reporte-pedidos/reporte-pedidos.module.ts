import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportePedidosPageRoutingModule } from './reporte-pedidos-routing.module';

import { ReportePedidosPage } from './reporte-pedidos.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportePedidosPageRoutingModule,
    ChartsModule
  ],
  declarations: [ReportePedidosPage]
})
export class ReportePedidosPageModule {}
