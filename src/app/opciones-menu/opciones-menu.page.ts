import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCrearNuevoPage } from '../menu y categorias/modal-crear-nuevo/modal-crear-nuevo.page'
import { ModalCartaPage } from '../menu y categorias/modal-carta/modal-carta.page'
import { ModalCargarCsvPage } from '../modal-cargar-csv/modal-cargar-csv.page'

@Component({
  selector: 'app-opciones-menu',
  templateUrl: './opciones-menu.page.html',
  styleUrls: ['./opciones-menu.page.scss'],
})
export class OpcionesMenuPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async modal(tipo) {
    if(tipo == "nuevo"){
      const modal = await this.modalController.create({
        component: ModalCrearNuevoPage,
        cssClass: 'modalPedido',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if(tipo == "carta"){
      const modal = await this.modalController.create({
        component: ModalCartaPage,
        cssClass: 'modalCarta',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }

    if(tipo == "csv"){
      const modal = await this.modalController.create({
        component: ModalCargarCsvPage,
        cssClass: 'modalCsv',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    
  }
}
