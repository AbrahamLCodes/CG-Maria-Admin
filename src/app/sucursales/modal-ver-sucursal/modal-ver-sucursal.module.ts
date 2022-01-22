import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVerSucursalPageRoutingModule } from './modal-ver-sucursal-routing.module';

import { ModalVerSucursalPage } from './modal-ver-sucursal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVerSucursalPageRoutingModule
  ],
  declarations: [ModalVerSucursalPage]
})
export class ModalVerSucursalPageModule {}
