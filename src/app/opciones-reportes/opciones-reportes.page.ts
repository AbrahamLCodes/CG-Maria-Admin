import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

import { MailSendPage } from '../mail-send/mail-send.page';

@Component({
  selector: 'app-opciones-reportes',
  templateUrl: './opciones-reportes.page.html',
  styleUrls: ['./opciones-reportes.page.scss'],
})
export class OpcionesReportesPage implements OnInit {

  constructor(
    public popoverController: PopoverController,
    public modalController: ModalController
    ) {}


  ngOnInit() {
  }
  async cerrarPop(){
    const popover = await this.popoverController.dismiss();
  }

  async reporteMail() {
    const modal = await this.modalController.create({
      component: MailSendPage,
      cssClass: 'modalMail',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
    });
    return await modal.present();
  }
}
