import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, PopoverController } from '@ionic/angular';
import { ModalEditarPage } from '../menu y categorias/modal-editar/modal-editar.page';
import { ModalVerSeguimientoPage } from '../modal-ver-seguimiento/modal-ver-seguimiento.page';
import { ModalNuevoSeguimientoPage } from '../modal-nuevo-seguimiento/modal-nuevo-seguimiento.page';

@Component({
  selector: 'app-opciones-seguimiento',
  templateUrl: './opciones-seguimiento.page.html',
  styleUrls: ['./opciones-seguimiento.page.scss'],
})
export class OpcionesSeguimientoPage implements OnInit {

  constructor(public modalController: ModalController,public alertController: AlertController, public popoverController: PopoverController,) { }

  ngOnInit() {
  }
  async modal(tipo) {
    if(tipo == "nuevo"){
      const modal = await this.modalController.create({
        component: ModalNuevoSeguimientoPage,
        cssClass: 'modalVer',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }

  }

  cerrarPop(){
    
  }
}
