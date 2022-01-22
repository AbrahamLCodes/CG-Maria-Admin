import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCartaPage } from './modal-carta.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCartaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCartaPageRoutingModule {}
