import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesReportesPage } from './opciones-reportes.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesReportesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesReportesPageRoutingModule {}
