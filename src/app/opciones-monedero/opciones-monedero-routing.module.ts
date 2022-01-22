import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesMonederoPage } from './opciones-monedero.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesMonederoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesMonederoPageRoutingModule {}
