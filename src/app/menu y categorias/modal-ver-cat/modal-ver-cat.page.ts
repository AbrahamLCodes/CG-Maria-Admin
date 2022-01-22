import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import ApiResponse from '../../interfaces/ApiResponse';
import { ModalEditarCatPage } from '../modal-editar-cat/modal-editar-cat.page';
import { ApiclientService } from '../../providers/apiclient.service';
import { UtileriasService } from '../../utilerias/utileriasservice';

@Component({
  selector: 'app-modal-ver-cat',
  templateUrl: './modal-ver-cat.page.html',
  styleUrls: ['./modal-ver-cat.page.scss'],
})

export class ModalVerCatPage implements OnInit {

  public id_categoria: any = ''
  public categoria: any = ''
  public categoriaSucursales = []
  public categoriaSucursalesString = ''

  constructor(
    public modalController: ModalController,
    public navParams: NavParams,
    private apiclient: ApiclientService,
    private utilerias: UtileriasService
  ) {

  }

  ngOnInit() {
    this.id_categoria = this.navParams.get('id_categoria')
    this.getCategoria(this.id_categoria)
  }

  getCategoria(id_categoria) {
    this.apiclient.mostrarUnRecursoEspecifico("categorias", id_categoria).subscribe(
      (res: any) => {
        this.categoria = res;
      }
    );
  }

  getCategoriaSucursales(id_categoria) {
    this.apiclient.showProductoCategoriaSucursales(id_categoria)
      .subscribe((response: ApiResponse) => {
        if (response.success) {
          this.categoriaSucursales = response.result
          response.result.forEach((item) => {
            let sucursal = ""
            switch (item.id_sucursal) {
              case 1:
                sucursal = "Tecnologico"
                break
              case 2:
                sucursal = "Centro"
                break
              case 3:
                sucursal = "Torres"
                break
            }
            this.categoriaSucursalesString += sucursal + ", "
          })
          this.categoriaSucursalesString = this.utilerias.removeLastCharacter(this.categoriaSucursalesString)
          this.categoriaSucursalesString += '.'
        }
      })
  }

  cerrarModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async goTo(tipo) {
    this.cerrarModal();
    if (tipo == "editarCat") {
      const modal = await this.modalController.create({
        component: ModalEditarCatPage,
        cssClass: 'modalEditar',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
        componentProps: {
          id_categoria: this.id_categoria
        }
      });
      return await modal.present();
    }
  }
}
