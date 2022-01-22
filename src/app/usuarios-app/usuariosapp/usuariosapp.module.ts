import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosappPageRoutingModule } from './usuariosapp-routing.module';

import { UsuariosappPage } from './usuariosapp.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosappPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [UsuariosappPage]
})
export class UsuariosappPageModule {}
