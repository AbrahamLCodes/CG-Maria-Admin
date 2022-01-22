import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ModalController } from '@ionic/angular';
import ApiResponse from '../interfaces/ApiResponse';
import Sucursal from '../interfaces/Sucursal';
import { ModalpedidoPage } from '../modalpedido/modalpedido.page';
import { ApiclientService } from '../providers/apiclient.service';
import { AlertController } from '@ionic/angular';
import { SocketService } from '../providers/socket.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  @ViewChild('slider', { read: IonSlides }) slider: IonSlides;
  @ViewChild("slide0") Slide0: ElementRef;
  @ViewChild("slide1") Slide1: ElementRef;
  @ViewChild("slide2") Slide2: ElementRef;
  @ViewChild("slide3") Slide3: ElementRef;
  @ViewChild("slide4") Slide4: ElementRef;
  @ViewChild("slide5") Slide5: ElementRef;

  public sucursales: Sucursal[];
  public pedidos: any[] = [];
  public pedidosAceptados: any[] = [];
  public pedidosPreparando: any[] = [];
  public pedidosListos: any[] = [];
  public pedidosEnCamino: any[] = [];
  public pedidosFinalizados: any[] = [];

  public sucursalSelectd: Sucursal = {
    id_sucursal: 0,
    nombre: 'Obteniendo sucursales',
    direccion: 'Direccion',
    latitud: 'latitud',
    longitud: 'longitud'
  }

  constructor(
    public router: Router,
    private renderer: Renderer2,
    public modalController: ModalController,
    private apiclient: ApiclientService,
    public alertController: AlertController,
    private socket: SocketService
  ) { }

  public slideOpts = {
    initialSlide: 0,
    speed: 300,
    mode: 'ios',
    autoplay: false,
    allowTouchMove: false
  };

  public async ngOnInit(): Promise<any> {
    this.getSucursales()
    this.socket.actualizarPedido().subscribe(response => {
      console.log("ADMIN_RESPONSE", response);
      this.getPedidos()
    })
  }

  public ionViewDidEnter(): void {
    this.getPedidos()
  }

  public sleep(ms): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public changeSucursalSelected(id_sucursal): void {
    if (id_sucursal === "TODO") {
    } else {
    }
  }

  public getPedidos(): void {
    this.pedidos = [];
    this.pedidosAceptados = [];
    this.pedidosPreparando = [];
    this.pedidosListos = [];
    this.pedidosEnCamino = [];
    this.pedidosFinalizados = [];
    this.apiclient.getRecurso("pedidos").subscribe(
      (res: any) => {
        res.forEach(element => {
          if (element.aceptado) {
            if (element.preparando) {
              if (element.listo) {
                if (!element.ordena_y_recoje) {
                  if (element.repartidor != null) {
                    if (element.en_camino) {
                      if (element.finalizado) {
                        this.pedidosFinalizados.push(element);
                      } else {
                        this.pedidosEnCamino.push(element);
                      }
                    } else {
                      this.pedidosListos.push(element);
                    }
                  } else {
                    this.pedidosListos.push(element);
                  }
                } else {
                  if (element.finalizado) {
                    this.pedidosFinalizados.push(element);
                  } else {
                    this.pedidosListos.push(element);
                  }
                }
              } else {
                this.pedidosPreparando.push(element);
              }
            } else {
              this.pedidosAceptados.push(element);
            }
          } else {
            this.pedidos.push(element);
          }
        });
      }
    );
  }

  public getSucursales(): void {
    this.apiclient.getSucursales().subscribe((response: ApiResponse) => {
      if (response.success) {
        this.sucursales = response.result
        this.sucursalSelectd = this.sucursales[0]
      }
    });
  }

  public async modalPedido(pedido: any): Promise<any> {
    const modal = await this.modalController.create({
      component: ModalpedidoPage,
      cssClass: 'modalPedido',
      swipeToClose: true,
      componentProps: {
        pedido: pedido
      }
    });
    return await modal.present();
  }

  public aceptarOrden(pedido: any): void {
    this.pedidosAceptados.push(pedido);
    this.pedidos.splice(this.pedidos.indexOf(pedido), 1);
    pedido.aceptado = true;
    this.apiclient.actualizarUnRecurso("pedidos", pedido.id, pedido).subscribe(res => {
      if (res.hasOwnProperty("id")) {
        this.socket.enviarActualizacion(pedido.cliente, pedido)
      }
    });
  }

  public prepararOrden(pedido: any): void {
    this.pedidosPreparando.push(pedido);
    this.pedidosAceptados.splice(this.pedidosAceptados.indexOf(pedido), 1);
    pedido.preparando = true;
    this.apiclient.actualizarUnRecurso("pedidos", pedido.id, pedido).subscribe((res: any) => {
      this.socket.enviarActualizacion(pedido.cliente, pedido)
    });
  }

  public listoOrden(pedido: any): void {
    this.pedidosListos.push(pedido);
    this.pedidosPreparando.splice(this.pedidosPreparando.indexOf(pedido), 1);
    pedido.listo = true;
    this.apiclient.actualizarUnRecurso("pedidos", pedido.id, pedido).subscribe((res: any) => {
      this.socket.enviarActualizacion(pedido.cliente, pedido)
    });
  }

  public async repartirOrden(pedido: any): Promise<any> {

    if (pedido.repartidor != null) {

      this.pedidosEnCamino.push(pedido);
      this.pedidosListos.splice(this.pedidosListos.indexOf(pedido), 1);
      pedido.en_camino = true;
      this.apiclient.actualizarUnRecurso("pedidos", pedido.id, pedido).subscribe((res: any) => {
        this.socket.enviarActualizacion(pedido.cliente, pedido)
      });
    } else {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'No hay repartidor asignado',
        message: 'Asigna un repartidor al pedido antes de pasar a la siguiente fase',
        buttons: ['OK']
      });

      await alert.present();
    }
  }

  public async finalizarOrderDomicilio(pedido: any): Promise<any> {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Finalizar Pedido',
      message: 'Desea finalizar el pedido?',
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
            this.pedidosFinalizados.push(pedido);
            this.pedidosEnCamino.splice(this.pedidosEnCamino.indexOf(pedido), 1);
            pedido.finalizado = true;
            pedido.cliente.pedido_pendiente = false;

            this.apiclient.actualizarUnRecurso("users", pedido.cliente.id, pedido.cliente).subscribe((res: any) => {
            });

            this.apiclient.actualizarUnRecurso("pedidos", pedido.id, pedido).subscribe((res: any) => {
              this.socket.enviarActualizacion(pedido.cliente, pedido)
            });
          }
        }
      ]
    });

    await alert.present();
  }

  public async finalizarOrder(pedido: any): Promise<any> {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Finalizar Pedido',
      message: 'Desea finalizar el pedido?',
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
            this.pedidosFinalizados.push(pedido);
            this.pedidosListos.splice(this.pedidosListos.indexOf(pedido), 1);
            pedido.finalizado = true;
            pedido.cliente.pedido_pendiente = false;

            this.apiclient.actualizarUnRecurso("users", pedido.cliente.id, pedido.cliente).subscribe((res: any) => {
            });

            this.apiclient.actualizarUnRecurso("pedidos", pedido.id, pedido).subscribe((res: any) => {
              this.socket.enviarActualizacion(pedido.cliente, pedido)
            });
          }
        }
      ]
    });

    await alert.present();
  }

  public async cancelar(pedido: any): Promise<any> {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cancelar Pedido',
      message: 'Desea finalizar el pedido?',
      inputs: [
        {
          name: 'razon_cancelamiento',
          type: 'text',
          placeholder: 'Ingrese razon para cancelacion'
        },
      ],
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
            this.pedidosFinalizados.push(pedido);
            this.pedidosListos.splice(this.pedidosListos.indexOf(pedido), 1);
            pedido.finalizado = true;
            pedido.cliente.pedido_pendiente = false;

            this.apiclient.actualizarUnRecurso("users", pedido.cliente.id, pedido.cliente).subscribe((res: any) => {

            });

            this.apiclient.actualizarUnRecurso("pedidos", pedido.id, pedido).subscribe((res: any) => {
              this.socket.enviarActualizacion(pedido.cliente, pedido)
            });
          }
        }
      ]
    });

  }

  public slideTo(slideNumber): void {

    this.slider.slideTo(slideNumber);
    if (slideNumber == 0) {
      this.renderer.setStyle(this.Slide0.nativeElement, 'background-color', 'var(--color-secundario)');
      this.renderer.setStyle(this.Slide1.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide2.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide3.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide4.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide5.nativeElement, 'background-color', 'var(--color-primario)');
    } else if (slideNumber == 1) {
      this.renderer.setStyle(this.Slide0.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide1.nativeElement, 'background-color', 'var(--color-secundario)');
      this.renderer.setStyle(this.Slide2.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide3.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide4.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide5.nativeElement, 'background-color', 'var(--color-primario)');
    } else if (slideNumber == 2) {
      this.renderer.setStyle(this.Slide0.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide1.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide2.nativeElement, 'background-color', 'var(--color-secundario)');
      this.renderer.setStyle(this.Slide3.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide4.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide5.nativeElement, 'background-color', 'var(--color-primario)');
    } else if (slideNumber == 3) {
      this.renderer.setStyle(this.Slide0.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide1.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide2.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide3.nativeElement, 'background-color', 'var(--color-secundario)');
      this.renderer.setStyle(this.Slide4.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide5.nativeElement, 'background-color', 'var(--color-primario)');
    } else if (slideNumber == 4) {
      this.renderer.setStyle(this.Slide0.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide1.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide2.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide3.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide4.nativeElement, 'background-color', 'var(--color-secundario)');
      this.renderer.setStyle(this.Slide5.nativeElement, 'background-color', 'var(--color-primario)');
    } else if (slideNumber == 5) {
      this.renderer.setStyle(this.Slide0.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide1.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide2.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide3.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide4.nativeElement, 'background-color', 'var(--color-primario)');
      this.renderer.setStyle(this.Slide5.nativeElement, 'background-color', 'var(--color-secundario)');
    }
  }

  public slideSwipe(): void {
    this.slider.getActiveIndex().then((index: number) => {
      if (index == 0) {
        this.renderer.setStyle(this.Slide0.nativeElement, 'background-color', 'var(--color-secundario)');
        this.renderer.setStyle(this.Slide1.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide2.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide3.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide4.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide5.nativeElement, 'background-color', 'var(--color-primario)');
      } else if (index == 1) {
        this.renderer.setStyle(this.Slide0.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide1.nativeElement, 'background-color', 'var(--color-secundario)');
        this.renderer.setStyle(this.Slide2.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide3.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide4.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide5.nativeElement, 'background-color', 'var(--color-primario)');
      } else if (index == 2) {
        this.renderer.setStyle(this.Slide0.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide1.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide2.nativeElement, 'background-color', 'var(--color-secundario)');
        this.renderer.setStyle(this.Slide3.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide4.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide5.nativeElement, 'background-color', 'var(--color-primario)');
      } else if (index == 3) {
        this.renderer.setStyle(this.Slide0.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide1.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide2.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide3.nativeElement, 'background-color', 'var(--color-secundario)');
        this.renderer.setStyle(this.Slide4.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide5.nativeElement, 'background-color', 'var(--color-primario)');
      } else if (index == 4) {
        this.renderer.setStyle(this.Slide0.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide1.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide2.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide3.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide4.nativeElement, 'background-color', 'var(--color-secundario)');
        this.renderer.setStyle(this.Slide5.nativeElement, 'background-color', 'var(--color-primario)');
      } else if (index == 5) {
        this.renderer.setStyle(this.Slide0.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide1.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide2.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide3.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide4.nativeElement, 'background-color', 'var(--color-primario)');
        this.renderer.setStyle(this.Slide5.nativeElement, 'background-color', 'var(--color-secundario)');
      }
    });
  }
}