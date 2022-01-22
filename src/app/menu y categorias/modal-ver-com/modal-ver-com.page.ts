import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import ApiResponse from '../../interfaces/ApiResponse';
import { ModalEditarComPage } from '../modal-editar-com/modal-editar-com.page';
import { ApiclientService } from '../../providers/apiclient.service';
import { UtileriasService } from '../../utilerias/utileriasservice';

@Component({
  selector: 'app-modal-ver-com',
  templateUrl: './modal-ver-com.page.html',
  styleUrls: ['./modal-ver-com.page.scss'],
})

export class ModalVerComPage implements OnInit {

  public id_complemento = ''
  public complemento: any = ''
  public sucursales: any = []
  public complementoSucursalString: string = ''

  constructor(
    public modalController: ModalController,
    private utilerias: UtileriasService,
    private apiclient: ApiclientService,
    private navParams: NavParams
  ) {

  }

  ngOnInit() {
    this.id_complemento = this.navParams.get("id_complemento")
    this.getComplemento()
  }

  getComplemento() {
    this.apiclient.mostrarUnRecursoEspecifico("tipos",this.id_complemento).subscribe((res: any) => {
      this.complemento = res;
    })
  }

  cerrarModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async goTo(tipo) {
    this.cerrarModal();
    if (tipo == "editarCom") {
      const modal = await this.modalController.create({
        component: ModalEditarComPage,
        cssClass: 'modalEditar',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
        componentProps: {
          id_complemento: this.id_complemento
        }
      });
      return await modal.present();
    }
  }
}