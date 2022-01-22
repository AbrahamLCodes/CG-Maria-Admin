import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonSlides, ModalController } from '@ionic/angular';
import ApiResponse from '../../interfaces/ApiResponse';
import Sucursal from '../../interfaces/Sucursal';
import { ApiclientService } from '../../providers/apiclient.service';
import { UtileriasService } from '../../utilerias/utileriasservice';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-nuevo-com',
  templateUrl: './modal-nuevo-com.page.html',
  styleUrls: ['./modal-nuevo-com.page.scss'],
})

export class ModalNuevoComPage implements OnInit {

  @ViewChild("trashButton") trashButton: ElementRef;

  public complementoForm: FormGroup;
  public productos: any;
  public opciones: any = [];

  mostrar: boolean = false

  constructor(
    private renderer: Renderer2,
    public modalController: ModalController,
    private apiclient: ApiclientService,
    private utilerias: UtileriasService,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    public router: Router
  ) {
    this.complementoForm = formBuilder.group({
      predeterminado: [true, [Validators.required]],
      required: [false, [Validators.required]],
      title: ['', [Validators.required]],
      max_quantity: [1, [Validators.required]],
      productos: null,
      opciones: null
    });

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
    this.opciones[index].product = event.detail.value.id;
  }

  onSelectActive(event: any, index: any){
    this.opciones[index].select = event.detail.checked;
    this.eraseButtonActive();
  }

  onSelectActiveStatus(event: any, index: any){
    this.opciones[index].default = event.detail.checked;
  }

  onChangeBox(event: any, index: any){
    this.opciones[index].allow_quantity = event.detail.checked;
  }

  onKeyUpPrice(event: any, index: any){
    this.opciones[index].price = event.target.value;
  }

  onKeyUpQuantity(event: any, index: any){
    this.opciones[index].max = event.target.value;
  }
  submitComplemento() {

    const productos = [];

    this.opciones.forEach(element => {
      productos.push(element.product);
    });

    this.complementoForm.patchValue({
      opciones: this.opciones,
      productos: productos
    });

    if(this.complementoForm.valid){
      this.apiclient.guardarRecurso("tipos", this.complementoForm.value).subscribe(
        (res: any) => {
          this.router.navigateByUrl("/menu");
          this.cerrarModal();
          window.location.reload();
        }
      );
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
      default: true,
      allow_quantity: true,
      product: null,
      price: "",
      max: "",
    })
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