import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-ver-promo',
  templateUrl: './modal-ver-promo.page.html',
  styleUrls: ['./modal-ver-promo.page.scss'],
})
export class ModalVerPromoPage implements OnInit {

  public promocion: any;

  constructor(
    public modalController: ModalController,
    private navParams: NavParams
  ) { }

  public ngOnInit(): void {
    this.promocion = this.navParams.get("promocion");
  }

  public cerrarModal(): void {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
