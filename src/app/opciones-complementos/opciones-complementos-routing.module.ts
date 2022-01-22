import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesComplementosPage } from './opciones-complementos.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesComplementosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesComplementosPageRoutingModule {}
