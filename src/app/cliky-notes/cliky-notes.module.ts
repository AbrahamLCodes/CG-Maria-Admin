import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClikyNotesPageRoutingModule } from './cliky-notes-routing.module';

import { ClikyNotesPage } from './cliky-notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClikyNotesPageRoutingModule
  ],
  declarations: [ClikyNotesPage]
})
export class ClikyNotesPageModule {}
