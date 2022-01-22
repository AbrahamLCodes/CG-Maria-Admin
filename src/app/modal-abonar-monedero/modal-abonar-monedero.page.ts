import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ClikTools } from '../Cliktools/cliktools';
import { AppService } from '../services/app.service';
import { StrapiClientService } from '../servicios/strapiclient.service';

@Component({
  selector: 'app-modal-abonar-monedero',
  templateUrl: './modal-abonar-monedero.page.html',
  styleUrls: ['./modal-abonar-monedero.page.scss'],
})
export class ModalAbonarMonederoPage implements OnInit {


  public clientesAbonar = []
  public clientes = []
  public buscador = ""
  public cantidad: number = 0

  constructor(
    public modalController: ModalController,
    private clikTools: ClikTools,
    private app: AppService,
    private alertController: AlertController,
    private strapi: StrapiClientService
  ) { }

  public async ngOnInit() {
    this.clientes = await this.app.clientes()
  }

  public abonar() {
    this.strapi.abonoMultiple(
      this.clientesAbonar, 
      this.cantidad
    ).toPromise().then((response: any[]) => {
      if(response.length > 0){
        this.clikTools.acceptMessage("Abono aplicado", "se ha aplicado un abono de $" + this.cantidad.toFixed(2) + " a " + this.clientesAbonar.length + " clientes")
        this.cerrarModal()
      }
    })
  }

  public agregarCliente(cliente) {
    if (this.clienteExiste(cliente)) {
      this.clikTools.warningToast("Ya has agregado este cliente a la lista para abonar")
    } else {
      this.clientesAbonar.push(cliente)
    }
  }

  public async removerCliente(index, cliente) {
    let alert = await this.alertController.create({
      header: "Quitar cliente de la lista",
      message: "¿Seguro que desea eliminar a " + cliente.username + " de la lista?",
      buttons: [
        {
          text: "No"
        },
        {
          text: "Eliminar",
          handler: () => {
            this.clientesAbonar.splice(index, 1)
          }
        }
      ]
    })
    alert.present()
  }

  private clienteExiste(cliente): boolean {
    let existe: boolean = false;
    for (let i = 0; i < this.clientesAbonar.length; i++) {
      if (this.clientesAbonar[i].id == cliente.id) {
        existe = true;
        break;
      }
    }
    return existe;
  }

  cerrarModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
