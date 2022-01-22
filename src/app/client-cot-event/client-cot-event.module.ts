import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientCotEventPageRoutingModule } from './client-cot-event-routing.module';

import { ClientCotEventPage } from './client-cot-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientCotEventPageRoutingModule
  ],
  declarations: [ClientCotEventPage]
})
export class ClientCotEventPageModule {}
