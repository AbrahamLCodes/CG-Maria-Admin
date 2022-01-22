import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IonSlides, ModalController, NavParams } from '@ionic/angular';
import { StrapiClientService } from 'src/app/servicios/strapiclient.service';

@Component({
  selector: 'app-modal-ver-usuario',
  templateUrl: './modal-ver-usuario.page.html',
  styleUrls: ['./modal-ver-usuario.page.scss'],
})
export class ModalVerUsuarioPage implements OnInit {

  public usuario: any
  public paymentMethod = ""
  public tipoUsuario = ""

  constructor(
    private renderer: Renderer2,
    public modalController: ModalController,
    private navParams: NavParams,
    private strapiclient: StrapiClientService
  ) {
  }

  ngOnInit() {
    this.usuario = this.navParams.get("usuario")
    switch (this.usuario.metodo_pago) {
      case "TARJETA":
        this.paymentMethod = "Card"
        break
      case "MONEDERO":
        this.paymentMethod = "Wallet"
        break
      case "EFECTIVO":
        this.paymentMethod = "Cash"
    }

    switch (this.usuario.provider) {
      case "local":
        this.tipoUsuario = "Native"
        break
      default:
        this.tipoUsuario = "Social"
        break
    }
  }

  cerrarModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
