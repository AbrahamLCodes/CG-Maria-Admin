import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVerQuejasPage } from './modal-ver-quejas.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVerQuejasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVerQuejasPageRoutingModule {}
