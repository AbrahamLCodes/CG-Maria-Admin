import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVerSucursalPage } from './modal-ver-sucursal.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVerSucursalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVerSucursalPageRoutingModule {}
