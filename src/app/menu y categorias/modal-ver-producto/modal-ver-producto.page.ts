import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalEditarPage } from '../modal-editar/modal-editar.page';
@Component({
  selector: 'app-modal-ver-producto',
  templateUrl: './modal-ver-producto.page.html',
  styleUrls: ['./modal-ver-producto.page.scss'],
})
export class ModalVerProductoPage implements OnInit {

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
        component: ModalEditarPage,
        cssClass: 'modalEditar',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    
  }

}
