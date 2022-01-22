import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal-notificaciones-push',
  templateUrl: './modal-notificaciones-push.page.html',
  styleUrls: ['./modal-notificaciones-push.page.scss'],
})
export class ModalNotificacionesPushPage implements OnInit {
  constructor(private renderer: Renderer2, public modalController: ModalController) { }
  ngAfterViewInit() {
  
  }
  ngOnInit() {
   
  }
  cerrarModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }


  files: File[] = [];

  onSelect(event) {
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

}
