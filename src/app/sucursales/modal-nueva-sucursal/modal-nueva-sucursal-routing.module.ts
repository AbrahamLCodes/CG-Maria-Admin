import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNuevaSucursalPage } from './modal-nueva-sucursal.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNuevaSucursalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNuevaSucursalPageRoutingModule {}
