import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesItemUsuarioPage } from './opciones-item-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesItemUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesItemUsuarioPageRoutingModule {}
