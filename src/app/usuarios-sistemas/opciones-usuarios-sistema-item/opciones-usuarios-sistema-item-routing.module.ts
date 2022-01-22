import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesUsuariosSistemaItemPage } from './opciones-usuarios-sistema-item.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesUsuariosSistemaItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesUsuariosSistemaItemPageRoutingModule {}
