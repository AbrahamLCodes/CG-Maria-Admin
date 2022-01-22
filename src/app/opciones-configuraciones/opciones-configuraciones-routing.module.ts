import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesConfiguracionesPage } from './opciones-configuraciones.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesConfiguracionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesConfiguracionesPageRoutingModule {}
