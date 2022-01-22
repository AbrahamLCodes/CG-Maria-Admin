import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import ApiResponse from '../../interfaces/ApiResponse';
import { ModalEditarSucursalPage } from '../modal-editar-sucursal/modal-editar-sucursal.page';
import { ModalEditarPage } from '../../menu y categorias/modal-editar/modal-editar.page';
import { ApiclientService } from '../../providers/apiclient.service';
import { UtileriasService } from '../../utilerias/utileriasservice';

@Component({
  selector: 'app-modal-ver-sucursal',
  templateUrl: './modal-ver-sucursal.page.html',
  styleUrls: ['./modal-ver-sucursal.page.scss'],
})

export class ModalVerSucursalPage implements OnInit {

  public id_sucursal = ''
  public sucursal: any = ''
  public tipoEntrega = ''
  public tipoPagoString = ''
  public imageToShow: any

  constructor(
    public modalController: ModalController,
    private navParams: NavParams,
    private utilerias: UtileriasService,
    private apiclient: ApiclientService
  ) { }

  ngOnInit() {
    this.id_sucursal = this.navParams.get("id_sucursal")
    this.getSucursal(this.id_sucursal)
  }

  getSucursal(id_sucursal) {

    this.apiclient.mostrarUnRecursoEspecifico("sucursales", id_sucursal).subscribe(
      (res: any) => {
        this.sucursal = res;
        this.setStrings()
        this.getImagen(this.sucursal.imagen)
      }
    );
  }

  getImagen(imagen){
    this.apiclient.showImageSucursal(imagen).subscribe((response) => {
      this.createImageFromBlob(response)
    })
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  setStrings() {
    switch (this.sucursal.tipo_entrega) {
      case "LOCAL":
        this.tipoEntrega = "Recoger en la sucursal"
        break
      case "DOMICILIO":
        this.tipoEntrega = "A domicilio"
        break
      case "AMBOS":
        this.tipoEntrega = "Recoger en la sucursal y a domicilio"
        break
    }

    if (this.sucursal.pago_efectivo === "SI") {
      this.tipoPagoString += "Efectivo"
    }

    if (this.sucursal.pago_monedero === "SI") {
      this.tipoPagoString += ", Monedero"
    }

    if (this.sucursal.pago_tarjeta = "SI") {
      this.tipoPagoString += ", Tarjeta."
    }
  }

  async goTo(tipo) {
    this.cerrarModal();
    if (tipo == "editar") {
      const modal = await this.modalController.create({
        component: ModalEditarSucursalPage,
        cssClass: 'modalEditar',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
        componentProps: {
          id_sucursal: this.id_sucursal
        }
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
