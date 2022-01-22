import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVerIngresosPage } from './modal-ver-ingresos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVerIngresosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVerIngresosPageRoutingModule {}
