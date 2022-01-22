import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { ApiclientService } from '../../providers/apiclient.service';
import { UtileriasService } from '../../utilerias/utileriasservice';
import { ClikTools } from '../../Cliktools/cliktools';

@Component({
  selector: 'app-modal-editar-sucursal',
  templateUrl: './modal-editar-sucursal.page.html',
  styleUrls: ['./modal-editar-sucursal.page.scss'],
})
export class ModalEditarSucursalPage implements OnInit {

  public files: any[] = [];
  public id_sucursal = '';
  public sucursal: any = '';
  public imageToShow: any;
  public sucursalForm: FormGroup;

  constructor(
    public modalController: ModalController,
    private navParams: NavParams,
    private apiclient: ApiclientService,
    private formBuilder: FormBuilder,
    private clikTools: ClikTools,
    private utilerias: UtileriasService
  ) {
    this.sucursalForm = formBuilder.group({
      activoOnline: ['false', [Validators.required]],
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      precio_minimo: ['', [Validators.required]],
      tipo_entrega: ['', [Validators.required]],
      tipo_cargo: ['', [Validators.required]],
      gastos_envio: ['', [Validators.required]],
      iva: ['', [Validators.required]],
      porcentaje_comision: ['', [Validators.required]],
      pago_efectivo: ['false', [Validators.required]],
      pago_monedero: ['false', [Validators.required]],
      pago_tarjeta: ['false', [Validators.required]]
    });
  }

  public ngAfterViewInit(): void {  }

  public ngOnInit(): void {
    this.id_sucursal = this.navParams.get("id_sucursal");
    this.getSucursal(this.id_sucursal);
  }

  public submitSucursal() {
    if (this.sucursalForm.valid) {
      this.sucursalForm.patchValue({
        /*
          La estructura de los métodos de pago en la base de datos
          se maneja desde aquí. Es una pésima práctica pero es lo que se 
          podía hacer con el poco tiempo del que se disponía :(

          Con snake_case es como se están manejando las propiedades del 
          JSON. Tanto aquí como la App del Cliente accederán a estas propiedades
          tal cual están escritas.

          ********** ESTANDAR ACTUAL: snake_case **********
        */
        metodos_pago: {
          "pago_efectivo": this.sucursalForm.value.pago_efectivo,
          "pago_monedero": this.sucursalForm.value.pago_monedero,
          "pago_tarjeta": this.sucursalForm.value.pago_tarjeta,
          "iva": (this.sucursalForm.value.iva / 100).toFixed(3)
        }
      });


      const formData = new FormData();
      formData.append('data', JSON.stringify(this.sucursalForm.value));
      formData.append('files.imagen', this.files[0]);

      this.apiclient.actualizarUnRecurso("sucursales", this.sucursal.id, formData).subscribe(
        (req: any) => {
          this.cerrarModal();
          //window.location.reload();
        }
      );
    } else {
      this.utilerias.showAcceptMessage("Formulario incorrecto", "Revisa que hallas llenado correctamente los campos");
    }
  }

  public verificarArchivo(): void {
    //Verificamos que el formato sea en jpeg
    if (this.files[0].type !== 'image/jpeg') {
      this.utilerias.showAcceptMessage("Archivo no valido", "Debes introducir un archivo en formato jpg o jpeg");
      this.files = [];
    } else {
      const imagenFile = this.files[0];
      const imagenSizeMb = imagenFile.size / 1024 / 1024;
      // Verificamos que pese menos de 2mb
      if (imagenSizeMb < 2) {
        var url = URL.createObjectURL(imagenFile);
        var img = new Image;
        img.src = url;
        img.onload = async () => {
          if (img.width !== 500 || img.height !== 500) {
            this.files = [];
            let alert: AlertController = new AlertController();
            const message = await alert.create({
              header: "Tamaño de la imágen incorrecto",
              message: "El tamaño de la imágen debe ser exactamente de 500 x 500. Redimensiona su tamaño o elige otra foto",
              buttons: [
                {
                  text: "Aceptar",
                },
                {
                  text: "Redimensionar",
                  handler: () => window.open('https://www.iloveimg.com/es/redimensionar-imagen', '_blank').focus()
                },
              ]
            });
            message.present();
          }
        };
      } else {
        this.files = [];
        this.utilerias.showAcceptMessage("Imágen demasiado pesada", "Debes introducir una imágen de menos de 2mb de peso");
      }
    }
  }

  private getSucursal(id_sucursal): void {
    this.apiclient.mostrarUnRecursoEspecifico("sucursales", id_sucursal).subscribe(
      async (res: any) => {
        this.sucursal = res;
        this.sucursalForm.patchValue({
          activoOnline: res.activoOnline,
          nombre: res.nombre,
          direccion: res.direccion,
          precio_minimo: res.precio_minimo,
          tipo_entrega: res.tipo_entrega,
          tipo_cargo: res.tipo_cargo,
          gastos_envio: res.gastos_envio,
          iva: (res.iva * 100).toFixed(2),
          porcentaje_comision: res.porcentaje_comision,
          pago_efectivo: res.metodos_pago.pago_efectivo,
          pago_monedero: res.metodos_pago.pago_monedero,
          pago_tarjeta: res.metodos_pago.pago_tarjeta
        });

        this.files[0] = await this.clikTools.ImgToFile(res.imagen);
      }
    );
  }

  public createImageFromBlob(image: Blob): void {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  public cerrarModal(): void {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  public onSelect(event): void {
    this.files = [];
    this.files.push(...event.addedFiles);
    this.verificarArchivo();
  }

  public onRemove(event): void {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
