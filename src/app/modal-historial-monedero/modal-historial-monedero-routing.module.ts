import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalHistorialMonederoPage } from './modal-historial-monedero.page';

const routes: Routes = [
  {
    path: '',
    component: ModalHistorialMonederoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalHistorialMonederoPageRoutingModule {}
