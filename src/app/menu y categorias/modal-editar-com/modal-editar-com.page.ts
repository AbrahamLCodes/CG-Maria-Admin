import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonSlides, ModalController, NavParams } from '@ionic/angular';
import ApiResponse from '../../interfaces/ApiResponse';
import Sucursal from '../../interfaces/Sucursal';
import { ApiclientService } from '../../providers/apiclient.service';
import { UtileriasService } from '../../utilerias/utileriasservice';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-editar-com',
  templateUrl: './modal-editar-com.page.html',
  styleUrls: ['./modal-editar-com.page.scss'],
})

export class ModalEditarComPage implements OnInit {

  public complementoForm: any;
  public productos: any;
  public opciones: any = [];
  public id: any;

  mostrar: boolean = false

  constructor(
    private renderer: Renderer2,
    public modalController: ModalController,
    private apiclient: ApiclientService,
    private utilerias: UtileriasService,
    private formBuilder: FormBuilder,
    private navparams: NavParams,
    public alertController: AlertController,
    public router: Router,
  ) {

    this.id = this.navparams.get("id_complemento");

    this.complementoForm = formBuilder.group({
      predeterminado: [false, [Validators.required]],
      required: [false, [Validators.required]],
      title: ['', [Validators.required]],
      max_quantity: [1, [Validators.required]],
      opciones: null
    });

    this.apiclient.mostrarUnRecursoEspecifico("tipos", this.id).subscribe(
      (res: any) => {
        this.complementoForm.patchValue({
          predeterminado: res.predeterminado,
          required: res.required,
          title: res.title,
          max_quantity: res.max_quantity,
          opciones: null
        });

        res.opciones.forEach(element => {
          this.opciones.push(element);
        });
      }
    );

    this.eraseButtonActive();

  }

  ngOnInit() {
    this.getProducts()
  }

  mostrarSelect(){
    this.mostrar=true
    if (this.mostrar === true){
    }
  }

  onChange(event: any, index: any){
    this.opciones[index].price = event.detail.value;
  }

  onSelect(event: any, index: any){
    this.opciones[index].product = event.detail.value;
  }

  onChangeBox(event: any, index: any){
    this.opciones[index].allow_quantity = event.detail.checked;
  }

  submitComplemento() {
    this.complementoForm.value.opciones = this.opciones; 

    if(this.complementoForm.valid){
      this.apiclient.actualizarUnRecurso("tipos", this.id, this.complementoForm.value).subscribe(
        (res: any) => {
          this.router.navigateByUrl("/menu");
          this.cerrarModal();
        }
      )
    }else{
      this.utilerias.showAcceptMessage("Form Invalid", "Check that you have filled out all the forms correctly")
    }

  }

  getProducts(){
    this.apiclient.getRecurso("productos").subscribe((response: any) => {
      this.productos = response;
    })
  }

  cerrarModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  addOption(){
    this.opciones.push({
      select: false,
      allow_quantity: true,
      product: "",
      price: "",
      max: "",
      default: true,
    })
  }

  onSelectActive(event: any, index: any){
    this.opciones[index].select = event.detail.checked;
    this.eraseButtonActive();
  }
  onSelectActiveStatus(event: any, index: any){
    this.opciones[index].default = event.detail.checked;
  }

  onKeyUpPrice(event: any, index: any){
    this.opciones[index].price = event.target.value;
  }

  onKeyUpQuantity(event: any, index: any){
    this.opciones[index].max = event.target.value;
  }

  async eraseOptions(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Do you want to delete selected products?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            var toDelete = [];
            this.opciones.forEach(element => {
              if(element.select){
                toDelete.push(element);
              }
            });

            toDelete.forEach(element => {
              this.opciones.splice(this.opciones.indexOf(element),1);
            });

            this.eraseButtonActive();
          }
        }
      ]
    });

    await alert.present();
  }

  public disabledButton: boolean = false;
  public disabledButtonColor: string = "#DC4B4B";
  eraseButtonActive(){
    var active = false;
    this.opciones.forEach(element => {
      if(element.select == true){
        active = true;
      }
    });

    this.disabledButton = !active;

    if(!active){
      this.disabledButtonColor = "#939393";
    }else{
      this.disabledButtonColor = "#DC4B4B";
    }
  }
}