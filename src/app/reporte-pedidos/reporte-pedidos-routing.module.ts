import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportePedidosPage } from './reporte-pedidos.page';

const routes: Routes = [
  {
    path: '',
    component: ReportePedidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportePedidosPageRoutingModule {}
