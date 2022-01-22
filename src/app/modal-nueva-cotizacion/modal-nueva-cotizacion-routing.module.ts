import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNuevaCotizacionPage } from './modal-nueva-cotizacion.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNuevaCotizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNuevaCotizacionPageRoutingModule {}
