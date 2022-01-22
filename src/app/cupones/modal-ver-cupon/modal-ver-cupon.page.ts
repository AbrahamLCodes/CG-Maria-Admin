import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalEditCuponPage } from '../modal-edit-cupon/modal-edit-cupon.page';

@Component({
  selector: 'app-modal-ver-cupon',
  templateUrl: './modal-ver-cupon.page.html',
  styleUrls: ['./modal-ver-cupon.page.scss'],
})
export class ModalVerCuponPage implements OnInit {

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
        component: ModalEditCuponPage,
        cssClass: 'modalEditar',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    
  }
}
