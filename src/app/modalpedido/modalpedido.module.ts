import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalpedidoPageRoutingModule } from './modalpedido-routing.module';

import { ModalpedidoPage } from './modalpedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ModalpedidoPageRoutingModule
  ],
  declarations: [ModalpedidoPage]
})
export class ModalpedidoPageModule {}
