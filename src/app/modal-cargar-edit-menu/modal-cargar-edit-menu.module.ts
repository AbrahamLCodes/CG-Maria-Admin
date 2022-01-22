import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCargarEditMenuPageRoutingModule } from './modal-cargar-edit-menu-routing.module';

import { ModalCargarEditMenuPage } from './modal-cargar-edit-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCargarEditMenuPageRoutingModule
  ],
  declarations: [ModalCargarEditMenuPage]
})
export class ModalCargarEditMenuPageModule {}
