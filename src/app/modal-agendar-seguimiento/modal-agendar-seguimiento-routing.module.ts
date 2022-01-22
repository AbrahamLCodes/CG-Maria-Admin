import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAgendarSeguimientoPage } from './modal-agendar-seguimiento.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAgendarSeguimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAgendarSeguimientoPageRoutingModule {}
