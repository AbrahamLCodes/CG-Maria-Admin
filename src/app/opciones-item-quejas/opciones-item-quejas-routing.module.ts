import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesItemQuejasPage } from './opciones-item-quejas.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesItemQuejasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesItemQuejasPageRoutingModule {}
