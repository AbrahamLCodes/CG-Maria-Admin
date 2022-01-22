import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-usuarios-sistema',
  templateUrl: './modal-usuarios-sistema.page.html',
  styleUrls: ['./modal-usuarios-sistema.page.scss'],
})
export class ModalUsuariosSistemaPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  cerrarModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  } 
}
