import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalNuevoUsuarioPage } from '../usuarios-app/modal-nuevo-usuario/modal-nuevo-usuario.page';
import { ModalEditUsuarioPage } from '../usuarios-app/modal-edit-usuario/modal-edit-usuario.page';
import { ModalVerUsuarioPage } from '../usuarios-app/modal-ver-usuario/modal-ver-usuario.page';
import { ModalCargarCsvPage } from '../modal-cargar-csv/modal-cargar-csv.page';
@Component({
  selector: 'app-opciones-item-usuario',
  templateUrl: './opciones-item-usuario.page.html',
  styleUrls: ['./opciones-item-usuario.page.scss'],
})
export class OpcionesItemUsuarioPage implements OnInit  {

    constructor(public modalController: ModalController,public alertController: AlertController) { }
  
    ngOnInit() {
    }
    async modal(tipo) {
      if(tipo == "nuevo"){
        const modal = await this.modalController.create({
          component: ModalNuevoUsuarioPage,
          cssClass: 'modalNuevo',
          mode: "ios",
          swipeToClose: true,
          backdropDismiss: true,
        });
        return await modal.present();
      }
      if(tipo == "editar"){
        const modal = await this.modalController.create({
          component: ModalEditUsuarioPage,
          cssClass: 'modalNuevo',
          mode: "ios",
          swipeToClose: true,
          backdropDismiss: true,
        });
        return await modal.present();
      }
      if(tipo == "ver"){
        const modal = await this.modalController.create({
          component: ModalVerUsuarioPage,
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
  
}
