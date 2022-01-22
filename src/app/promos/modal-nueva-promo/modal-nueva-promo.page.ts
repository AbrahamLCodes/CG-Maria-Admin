import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { StrapiClientService } from '../../servicios/strapiclient.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtileriasService } from '../../utilerias/utileriasservice';
import { ClikTools } from '../../Cliktools/cliktools';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-modal-nueva-promo',
  templateUrl: './modal-nueva-promo.page.html',
  styleUrls: ['./modal-nueva-promo.page.scss'],
})
export class ModalNuevaPromoPage implements OnInit {

  public sucursales = [];
  public productos = [];
  public promoForm: FormGroup;
  public editar: boolean = false;
  private promocionEditarId: number = null;

  constructor(
    public utilerias: UtileriasService,
    public modalController: ModalController,
    public strapiclient: StrapiClientService,
    public fb: FormBuilder,
    public toastController: ToastController,
    private navParams: NavParams,
    private clikTools: ClikTools,
    private app: AppService
  ) {
    this.promoForm = this.fb.group({
      identificador: [null, Validators.required],
      esPorFechas: [false, Validators.required],
      fechaInicial: [null],
      fechaFinal: [null],
      sucursales: [null],
      todasSucursales: [false, Validators.required],
      esDiaria: [false, Validators.required],
      dias: [null],
      esTodoDia: [false, Validators.required],
      horaInicial: [null],
      horaFinal: [null],
      tipoPromocion: [null, Validators.required],
      valorPromocion: [null],
      cantidadMinima: [null],
      cantidadMaxima: [null],
      gratisMinima: [null],
      gratisMaxima: [null],
      numeroMaxProductos: [0, Validators.required],
      aplicaTodosProductos: [false, Validators.required],
      productos: [null]
    });
  }

  public async ngOnInit(): Promise<any> {
    this.editar = this.navParams.get("editar");
    this.sucursales = await this.app.sucursales();

    if (this.editar) {

      const promoEditar = this.navParams.get("promocion");
      this.promocionEditarId = promoEditar.id;

      this.promoForm.patchValue({
        identificador: promoEditar.identificador,
        esPorFechas: promoEditar.esPorFechas,
        fechaInicial: promoEditar.fechaInicial,
        fechaFinal: promoEditar.fechaFinal,
        sucursales: this.devolverIDs(promoEditar.sucursales),
        todasSucursales: promoEditar.todasSucursales,
        esDiaria: promoEditar.esDiaria,
        dias: this.devolverDias(promoEditar.dias),
        esTodoDia: promoEditar.esTodoDia,
        horaInicial: promoEditar.horaInicial,
        horaFinal: promoEditar.horaFinal,
        tipoPromocion: promoEditar.tipoPromocion,
        valorPromocion: promoEditar.valorPromocion,
        cantidadMinima: promoEditar.cantidadMinima,
        cantidadMaxima: promoEditar.cantidadMaxima,
        gratisMinima: promoEditar.gratisMinima,
        gratisMaxima: promoEditar.gratisMaxima,
        numeroMaxProductos: promoEditar.numeroMaxProductos,
        aplicaTodosProductos: promoEditar.aplicaTodosProductos,
        productos: this.devolverIDs(promoEditar.productos)
      })
      this.productos = await this.app.productosDisponiblesPromo(this.promoForm.value);
    } else {
      this.productos = await this.app.productosSinPromo();
    }
  }

  private devolverDias(diasJSON: any[]): string[] {
    const dias = [];
    for (let key in diasJSON) {
      if (diasJSON[key] == true) {
        dias.push(key)
      }
    }
    return dias;
  }

  private devolverIDs(array: any[]): number[] {
    let ids = [];
    array.forEach(item => {
      ids.push(item.id);
    })
    return ids;
  }

  public cerrarModal(): void {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  public async save(): Promise<any> {
    if (this.promoForm.valid) {
      if (this.editar) {
        this.strapiclient.actualizarPromo(
          this.promocionEditarId,
          this.promoForm.value
        ).toPromise().then(_ => {
          this.clikTools.customToast("Promoción editada exitosamente!", "primary");
          this.cerrarModal();
        });
      } else {
        await this.strapiclient.crearPromo(
          this.promoForm.value
        ).toPromise().then(_ => {
          this.clikTools.customToast("Promoción creada exitosamente!", "primary");
          this.cerrarModal();
        });
      }
    } else {
      this.clikTools.warningToast("Revise los campos que esten llenos correctamente.");
    }
  }

  public changeSucursalesOption(event: any): void {
    if (event.detail.checked) {
      this.promoForm.patchValue({
        sucursales: [this.promoForm.value.sucursales],
      });
    } else {
      this.promoForm.patchValue({
        sucursales: [this.promoForm.value.sucursales, Validators.required],
      });
    }
  }

  public changeProductosOption(event: any): void {
    if (event.detail.checked) {
      this.promoForm.patchValue({
        productos: [this.promoForm.value.productos],
      });
    } else {
      this.promoForm.patchValue({
        productos: [this.promoForm.value.productos, Validators.required],
      });
    }
  }
}
