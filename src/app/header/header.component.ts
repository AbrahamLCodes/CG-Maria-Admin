import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { PopoverController, AlertController, ModalController } from '@ionic/angular';

import { ModalDevolucionPage } from '../modal-devolucion/modal-devolucion.page';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router,private _location: Location,public popoverController: PopoverController,public alertController: AlertController,private renderer: Renderer2, public modalController: ModalController) { }

  ngOnInit() {}
  backClicked() {
    this._location.back();
  }
  async modal(tipo) {
    if(tipo == "devolucion"){
      const modal = await this.modalController.create({
        component: ModalDevolucionPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
  
  }
}
