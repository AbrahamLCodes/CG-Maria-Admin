import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, AlertController, ModalController } from '@ionic/angular';
import { ModalCargarCsvPage } from '../../modal-cargar-csv/modal-cargar-csv.page';
import { ModalEditUsuariosSistemaPage } from '../modal-edit-usuarios-sistema/modal-edit-usuarios-sistema.page';
import { ModalNuevoUsuarioSistemaPage } from '../modal-nuevo-usuario-sistema/modal-nuevo-usuario-sistema.page';
import { ModalVerUsuariosSistemaPage } from '../modal-ver-usuarios-sistema/modal-ver-usuarios-sistema.page';
import { OpcionesUsuariosSistemaPage } from '../opciones-usuarios-sistema/opciones-usuarios-sistema.page';

@Component({
  selector: 'app-opciones-usuarios-sistema-item',
  templateUrl: './opciones-usuarios-sistema-item.page.html',
  styleUrls: ['./opciones-usuarios-sistema-item.page.scss'],
})
export class OpcionesUsuariosSistemaItemPage implements OnInit {


  constructor(public popoverController: PopoverController,public alertController: AlertController, public router: Router,private renderer: Renderer2, public modalController: ModalController) { }


  ngOnInit() {
  }

    async alert(tipo) {
    if(tipo ==="borrar"){
      const alert = await this.alertController.create({
        cssClass: 'alert',
        header: 'Confirmación',
        message: 'Se borrará el elemento seleccionado',
        buttons: ['OK']
      });
      await alert.present();
    }

  }
  async modal(tipo) {
    if(tipo == "nuevo"){
      const modal = await this.modalController.create({
        component: ModalNuevoUsuarioSistemaPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if(tipo == "editar"){
      const modal = await this.modalController.create({
        component: ModalEditUsuariosSistemaPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if(tipo == "ver"){
      const modal = await this.modalController.create({
        component: ModalVerUsuariosSistemaPage,
        cssClass: 'modalNuevo',
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
  cerrarModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

 
}
