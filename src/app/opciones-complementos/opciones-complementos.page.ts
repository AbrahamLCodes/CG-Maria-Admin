import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalNuevoComPage } from '../menu y categorias/modal-nuevo-com/modal-nuevo-com.page';
import { ModalCargarCsvPage } from '../modal-cargar-csv/modal-cargar-csv.page';

@Component({
  selector: 'app-opciones-complementos',
  templateUrl: './opciones-complementos.page.html',
  styleUrls: ['./opciones-complementos.page.scss'],
})
export class OpcionesComplementosPage implements OnInit {
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async modal(tipo) {
    if(tipo == "nuevo"){
      const modal = await this.modalController.create({
        component: ModalNuevoComPage,
        cssClass: 'modalPedido',
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
