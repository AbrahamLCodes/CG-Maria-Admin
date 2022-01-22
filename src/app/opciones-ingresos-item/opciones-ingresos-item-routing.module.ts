import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesIngresosItemPage } from './opciones-ingresos-item.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesIngresosItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesIngresosItemPageRoutingModule {}
