import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FidelizacionOpcionesPage } from './fidelizacion-opciones.page';

const routes: Routes = [
  {
    path: '',
    component: FidelizacionOpcionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FidelizacionOpcionesPageRoutingModule {}
