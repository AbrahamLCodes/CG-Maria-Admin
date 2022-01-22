import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientCotEventPage } from './client-cot-event.page';

const routes: Routes = [
  {
    path: '',
    component: ClientCotEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientCotEventPageRoutingModule {}
