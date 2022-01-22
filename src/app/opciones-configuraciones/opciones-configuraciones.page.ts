import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ModalKeysPagosPage } from '../modal-keys-pagos/modal-keys-pagos.page';
import { ModalUsuariosSistemaPage } from '../modal-usuarios-sistema/modal-usuarios-sistema.page';

@Component({
  selector: 'app-opciones-configuraciones',
  templateUrl: './opciones-configuraciones.page.html',
  styleUrls: ['./opciones-configuraciones.page.scss'],
})
export class OpcionesConfiguracionesPage implements OnInit {

  constructor(public popoverController: PopoverController,public modalController: ModalController) {}

  ngOnInit() {
  }

  async modal(tipo) {
    if(tipo == 'usuariosSistema'){
      const modal = await this.modalController.create({
        component: ModalUsuariosSistemaPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true
      });
      return await modal.present();
    }

    if(tipo == 'keyPagos'){
      const modal = await this.modalController.create({
        component: ModalKeysPagosPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true
      });
      return await modal.present();
    }

  }
  async cerrarPop(){
    const popover = await this.popoverController.dismiss();
  }
}
