import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, AlertController, ModalController } from '@ionic/angular';
import { ModalAbonarMonederoPage } from '../modal-abonar-monedero/modal-abonar-monedero.page';
import { ModalDescontarMonederoPage } from '../modal-descontar-monedero/modal-descontar-monedero.page';
import { OpcionesMonederoPage } from '../opciones-monedero/opciones-monedero.page';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-monedero',
  templateUrl: './monedero.page.html',
  styleUrls: ['./monedero.page.scss'],
})
export class MonederoPage {

  public clientes = []
  public buscador = ""

  constructor(
    public popoverController: PopoverController,
    public alertController: AlertController,
    public router: Router,
    public modalController: ModalController,
    private app: AppService
  ) { }

  public async ionViewDidEnter() {
    this.clientes = await this.app.clientes()
  }

  public async abonar() {
    const modal = await this.modalController.create({
      component: ModalAbonarMonederoPage,
      cssClass: 'modalNuevo',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
    });
    modal.onDidDismiss().then(async _ => {
      this.clientes = await this.app.clientes()
    })
    return await modal.present();
  }

  public async descontar(cliente) {
    const modal = await this.modalController.create({
      component: ModalDescontarMonederoPage,
      cssClass: 'modalNuevo',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: {
        cliente
      }
    });

    modal.onDidDismiss().then(async _ => {
      this.clientes = await this.app.clientes()
    });
    return await modal.present();
  }

  public async opcionesRes(event, cliente) {
    const popover = await this.popoverController.create({
      component: OpcionesMonederoPage,
      cssClass: 'popOver',
      mode: 'ios',
      translucent: true,
      componentProps: {
        cliente
      }
    });
    popover.onDidDismiss().then(async _ => {
      this.clientes = await this.app.clientes()
    })
    await popover.present();
  }

  public async cerrarPop() {
    const popover = await this.popoverController.dismiss();
  }
}
