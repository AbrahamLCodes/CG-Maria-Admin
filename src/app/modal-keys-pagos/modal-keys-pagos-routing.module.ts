import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalKeysPagosPage } from './modal-keys-pagos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalKeysPagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalKeysPagosPageRoutingModule {}
