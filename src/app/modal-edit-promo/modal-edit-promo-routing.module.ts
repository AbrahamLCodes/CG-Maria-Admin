import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditPromoPage } from './modal-edit-promo.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditPromoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditPromoPageRoutingModule {}
