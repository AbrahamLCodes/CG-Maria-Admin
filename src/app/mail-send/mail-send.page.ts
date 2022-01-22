import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mail-send',
  templateUrl: './mail-send.page.html',
  styleUrls: ['./mail-send.page.scss'],
})
export class MailSendPage implements OnInit {

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
