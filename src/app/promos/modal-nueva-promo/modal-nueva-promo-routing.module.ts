import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNuevaPromoPage } from './modal-nueva-promo.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNuevaPromoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNuevaPromoPageRoutingModule {}
