import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesRestaurantePage } from './opciones-restaurante.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesRestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesRestaurantePageRoutingModule {}
