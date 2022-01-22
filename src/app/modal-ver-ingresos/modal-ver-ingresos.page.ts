import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalEditUsuariosSistemaPage } from '../usuarios-sistemas/modal-edit-usuarios-sistema/modal-edit-usuarios-sistema.page';

@Component({
  selector: 'app-modal-ver-ingresos',
  templateUrl: './modal-ver-ingresos.page.html',
  styleUrls: ['./modal-ver-ingresos.page.scss'],
})
export class ModalVerIngresosPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  cerrarModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  } 
  
  async goTo(tipo) {
    this.cerrarModal();
    if(tipo == "editar"){
      const modal = await this.modalController.create({
        component: ModalEditUsuariosSistemaPage,
        cssClass: 'modalEditar',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    
  }

}
