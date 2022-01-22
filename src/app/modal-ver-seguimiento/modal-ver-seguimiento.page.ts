import { Component, OnInit, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalNuevaCotizacionPage } from '../modal-nueva-cotizacion/modal-nueva-cotizacion.page';
import { ModalNuevoContratoPage } from '../modal-nuevo-contrato/modal-nuevo-contrato.page';
import { ModalAgendarSeguimientoPage } from '../modal-agendar-seguimiento/modal-agendar-seguimiento.page';

@Component({
  selector: 'app-modal-ver-seguimiento',
  templateUrl: './modal-ver-seguimiento.page.html',
  styleUrls: ['./modal-ver-seguimiento.page.scss'],
})
export class ModalVerSeguimientoPage implements OnInit {
  constructor(private renderer: Renderer2, public modalController: ModalController) { }
  ngAfterViewInit() {
  
  }
  ngOnInit() {
   
  }
  cerrarModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }


  files: File[] = [];

  onSelect(event) {
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  async goTo(tipo) {
    this.cerrarModal();
    if(tipo == "cot"){
      const modal = await this.modalController.create({
        component: ModalNuevaCotizacionPage,
        cssClass: 'modalEditar',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if(tipo == "con"){
      const modal = await this.modalController.create({
        component: ModalNuevoContratoPage,
        cssClass: 'modalEditar',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    if(tipo == "agenda"){
      const modal = await this.modalController.create({
        component: ModalAgendarSeguimientoPage,
        cssClass: 'modalEditar',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
      });
      return await modal.present();
    }
    
  }
}
