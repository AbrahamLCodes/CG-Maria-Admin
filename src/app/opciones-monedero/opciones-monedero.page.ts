import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, NavParams, PopoverController } from '@ionic/angular';
import { ModalDescontarMonederoPage } from '../modal-descontar-monedero/modal-descontar-monedero.page';

@Component({
  selector: 'app-opciones-monedero',
  templateUrl: './opciones-monedero.page.html',
  styleUrls: ['./opciones-monedero.page.scss'],
})
export class OpcionesMonederoPage implements OnInit{

  private cliente: any

  constructor(
    private popoverController: PopoverController,
    public modalController: ModalController,
    public alertController: AlertController,
    public navParams: NavParams
  ) { }

  public ngOnInit(){
    this.cliente = this.navParams.get("cliente")
  }

  public async descontar() {
    const modal = await this.modalController.create({
      component: ModalDescontarMonederoPage,
      cssClass: 'modalNuevo',
      mode: "ios",
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: {
        cliente: this.cliente
      }
    });
    modal.onDidDismiss().then(_ => {
      this.popoverController.dismiss()
    })
    return await modal.present();
  }

  async alert(tipo) {
    if (tipo === "borrar") {
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
