import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteIngresosPage } from './reporte-ingresos.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteIngresosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteIngresosPageRoutingModule {}
