import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ClikTools } from '../Cliktools/cliktools';
import { StrapiClientService } from '../servicios/strapiclient.service';

@Component({
  selector: 'app-modal-descontar-monedero',
  templateUrl: './modal-descontar-monedero.page.html',
  styleUrls: ['./modal-descontar-monedero.page.scss'],
})
export class ModalDescontarMonederoPage implements OnInit {

  public cliente: any
  public cantidad: number = 0

  constructor(
    public modalController: ModalController,
    private navParams: NavParams,
    private strapi: StrapiClientService,
    private clikTools: ClikTools
  ) { }

  public ngOnInit() {
    this.cliente = this.navParams.get("cliente");
  }

  public actualizarMonedero() {
    this.strapi.actualizarDato(
      "users",
      this.cliente.id,
      { monedero: this.nuevoSaldo() }
    ).toPromise().then(response => {
      if (response.hasOwnProperty("id")) {
        this.clikTools.acceptMessage("Descuento aplicado", "Se ha descontado $" + this.cantidad.toFixed(2) + " a " + this.cliente.username);
        this.cerrarModal();
      }
    })
  }

  public nuevoSaldo(): number {
    let nuevo: number = 0;
    let actual: number = this.cliente.monedero;
    if (this.cantidad !== undefined && actual > this.cantidad) {
      nuevo = actual - this.cantidad;
    }
    return nuevo;
  }

  public cerrarModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
