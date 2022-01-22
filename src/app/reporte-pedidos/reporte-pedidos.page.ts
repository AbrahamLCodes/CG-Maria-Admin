import { Component, OnInit, Renderer2 } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

import { PopoverController, AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalVerIngresosPage } from '../modal-ver-ingresos/modal-ver-ingresos.page';
import { OpcionesIngresosItemPage } from '../opciones-ingresos-item/opciones-ingresos-item.page';

@Component({
  selector: 'app-reporte-pedidos',
  templateUrl: './reporte-pedidos.page.html',
  styleUrls: ['./reporte-pedidos.page.scss'],
})
export class ReportePedidosPage implements OnInit {

  constructor(public popoverController: PopoverController,public alertController: AlertController, public router: Router,private renderer: Renderer2, public modalController: ModalController) { }
 
  ngOnInit() {
  }
  async opcionesRes(ev: any,tipo) {
    if(tipo === "opcionesItem"){
      const popover = await this.popoverController.create({
        component: OpcionesIngresosItemPage,
        cssClass: 'popOver',
        event: ev,
        mode: 'ios',
        translucent: true
      });
      await popover.present();
    }
  }

  async modal(tipo) {
    if(tipo == "ver"){
      const modal = await this.modalController.create({
        component: ModalVerIngresosPage,
        cssClass: 'modalNuevo',
        mode: "ios",
        swipeToClose: true,
        backdropDismiss: true,
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


  public lineChartData = [
    {
      data: [125400, 125896, 78564, 45792, 147963, 852369, 147365, 457363, 14932, 45369, 521000 ,800000],
      label: 'Pedidos',
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      
    },
    
  ];
  lineChartOptions: ChartOptions = {
    responsive: true,
    // animations: {
    //   tension: {
    //     duration: 3000,
    //     easing: 'linear',
    //     from: 1,
    //     to: 0,
    //     loop: false
    //   }
    // },

  };


  lineChartLegend = true;
  lineChartPlugins = [];
  barChartType = 'bar';
  lineChartType = 'line';
  pieChartType = 'pie';
  bubbleChartType = 'bubble';








  public lineChartLabels: Label[] = ['Ene', 'Feb', 'Mar', 'Abr' , 'May' , 'Jun' , 'Jul' , 'Ago' , 'Sep' ,'Oct' , 'Nov' ,'Dic'];

}
