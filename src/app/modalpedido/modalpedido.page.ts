import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiclientService } from '../providers/apiclient.service';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-modalpedido',
  templateUrl: './modalpedido.page.html',
  styleUrls: ['./modalpedido.page.scss'],
})
export class ModalpedidoPage implements OnInit {
  public pedidoForm: FormGroup

  constructor(
    private navparams: NavParams,
    public modalController: ModalController,
    public apicliente: ApiclientService,
    private formBuilder: FormBuilder,
    public toastController: ToastController
  ) {
    this.pedidoForm = formBuilder.group({
      repartidor: ""
     })
   }

  public pedido:any;
  public repartidores: any[] = [];
  public fecha: any = "";
  public hora: any = "";

  public extra = 0.0;
  ngOnInit() {
    this.pedido = this.navparams.get("pedido")
    var fecha = this.pedido.created_at.split("T");
    this.fecha = fecha[0];
    this.hora = fecha[1].split(".")[0]

    this.pedido.productos.carrito.forEach(element => {
      if(element.opcionales.length > 0){
        element.opcionales.forEach(elem => {
          this.extra += (elem.cantidad * parseFloat(elem.opcional.opcion.price));  
        });
      }
    });

    this.apicliente.getRecurso("users").subscribe(
      (res: any) => {
        res.forEach(element => {
          if(element.tipo == "REPARTIDOR"){
            this.repartidores.push(element);
          }
        });
      }
    );

    this.pedidoForm.patchValue({
      repartidor: this.pedido.repartidor.id
    });
  }
  cerrarModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  public repartidor: any;
  elegirRepartidor(event: any){
    this.repartidor = event.detail.value;
  }

  asignarRepartidor(){
    this.pedido.repartidor = this.repartidor;
    this.apicliente.actualizarUnRecurso("pedidos", this.pedido.id, this.pedido).subscribe(
      async (res: any) => {
        const toast = await this.toastController.create({
          message: 'Se ha asigando un repartidor a la orden.',
          duration: 2000
        });
        toast.present();
        this.cerrarModal();
      }
    )
  }
}
