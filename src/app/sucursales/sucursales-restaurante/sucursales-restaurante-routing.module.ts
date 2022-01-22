import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SucursalesRestaurantePage } from './sucursales-restaurante.page';

const routes: Routes = [
  {
    path: '',
    component: SucursalesRestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SucursalesRestaurantePageRoutingModule {}
