import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesQuejasPage } from './opciones-quejas.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesQuejasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesQuejasPageRoutingModule {}
