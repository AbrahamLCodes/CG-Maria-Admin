import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, AlertController, ModalController } from '@ionic/angular';
import { ModalVerQuejasPage } from '../modal-ver-quejas/modal-ver-quejas.page';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.page.html',
  styleUrls: ['../usuarios-app/usuariosapp/usuariosapp.page.scss'],
})
export class QuejasPage {

  public slideOpts = {
    initialSlide: 0,
    speed: 300,
    mode: 'ios',
    autoplay: false,
    allowTouchMove: false
  };

  public quejas;
  public quejasFiltradas;

  public selector1: string = "TODO";
  public selector2: string = "TODO";

  constructor(
    public popoverController: PopoverController,
    public alertController: AlertController,
    public router: Router,
    public modalController: ModalController,
    private app: AppService
  ) { }

  public async ionViewDidEnter(): Promise<any> {
    this.quejas = await this.app.quejas();
    this.quejasFiltradas = this.quejas;
  }

  public async verQueja(queja): Promise<any> {
    const modal = await this.modalController.create({
      component: ModalVerQuejasPage,
      cssClass: 'modalNuevo',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: {
        queja
      }
    });
    modal.onDidDismiss().then(async _ => {
      this.quejas = await this.app.quejas()
    })
    return await modal.present();
  }

  public filtrarQuejasSelector1(event: any): void {
    this.selector1 = event.detail.value;
    this.filtrar();
  }

  public filtrarQuejasSelector2(event: any): void {
    this.selector2 = event.detail.value;
    this.filtrar();
  }

  public filtrar(): void {
    if (this.selector1 == "TODO" && this.selector2 == "TODO") {
      this.quejasFiltradas = this.quejas;
    } else if (this.selector1 == "TODO" && this.selector2 !== "TODO") {
      this.quejasFiltradas = this.quejas.filter(queja => queja.motivo == this.selector2);
    } else if (this.selector1 !== "TODO" && this.selector2 == "TODO") {
      this.quejasFiltradas = this.quejas.filter(queja => queja.asunto == this.selector1);
    } else if (this.selector1 !== "TODO" && this.selector2 !== "TODO") {
      this.quejasFiltradas = this.quejas.filter(queja => queja.asunto == this.selector1 && queja.motivo == this.selector2);
    }
  }

  public cerrarModal(): void {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
