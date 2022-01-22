import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVerPromoPage } from './modal-ver-promo.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVerPromoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVerPromoPageRoutingModule {}
