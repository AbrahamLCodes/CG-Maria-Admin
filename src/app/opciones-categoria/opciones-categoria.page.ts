import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalNuevaCatPage } from '../menu y categorias/modal-nueva-cat/modal-nueva-cat.page';
import { ModalCargarCsvPage } from '../modal-cargar-csv/modal-cargar-csv.page';


@Component({
  selector: 'app-opciones-categoria',
  templateUrl: './opciones-categoria.page.html',
  styleUrls: ['./opciones-categoria.page.scss'],
})
export class OpcionesCategoriaPage implements OnInit {
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async modal(tipo) {
    if(tipo == "nuevo"){
      const modal = await this.modalController.create({
        component: ModalNuevaCatPage,
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
