import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesUsuariosSistemaPage } from './opciones-usuarios-sistema.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesUsuariosSistemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesUsuariosSistemaPageRoutingModule {}
