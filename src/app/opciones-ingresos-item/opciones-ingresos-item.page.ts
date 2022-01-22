import { Component, OnInit, Renderer2 } from '@angular/core';
import { ModalVerIngresosPage } from '../modal-ver-ingresos/modal-ver-ingresos.page';
import { PopoverController, AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-opciones-ingresos-item',
  templateUrl: './opciones-ingresos-item.page.html',
  styleUrls: ['./opciones-ingresos-item.page.scss'],
})
export class OpcionesIngresosItemPage implements OnInit {

  constructor(public popoverController: PopoverController,public alertController: AlertController, public router: Router,private renderer: Renderer2, public modalController: ModalController) { }

  ngOnInit() {
  }
  async modal(tipo) {
    if(tipo == "ver"){
      const modal = await this.modalController.create({
        component: ModalVerIngresosPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }

   
  }
}
