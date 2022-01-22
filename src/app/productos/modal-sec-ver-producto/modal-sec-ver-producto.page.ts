import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalEditarProductoPage } from '../modal-editar-producto/modal-editar-producto.page';

@Component({
  selector: 'app-modal-sec-ver-producto',
  templateUrl: './modal-sec-ver-producto.page.html',
  styleUrls: ['./modal-sec-ver-producto.page.scss'],
})
export class ModalSecVerProductoPage implements OnInit {

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
        component: ModalEditarProductoPage,
        cssClass: 'modalEditar',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    
  }


}
