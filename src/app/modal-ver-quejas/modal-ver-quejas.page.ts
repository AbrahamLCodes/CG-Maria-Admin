import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { ClikFechas } from '../Cliktools/clikfechas';
import { ClikTools } from '../Cliktools/cliktools';
import { SocketService } from '../providers/socket.service';
import { StrapiClientService } from '../servicios/strapiclient.service';

@Component({
  selector: 'app-modal-ver-quejas',
  templateUrl: './modal-ver-quejas.page.html',
  styleUrls: ['../cupones/modal-ver-cupon/modal-ver-cupon.page.scss'],
})
export class ModalVerQuejasPage implements OnInit {

  public queja
  public form: FormGroup

  constructor(
    public modalController: ModalController,
    private navParams: NavParams,
    public clikFechas: ClikFechas,
    private strapi: StrapiClientService,
    private socket: SocketService,
    private fb: FormBuilder,
    private clikTools: ClikTools
  ) {
    this.form = fb.group({
      titulo: [null, [Validators.required]],
      mensaje: [null, [Validators.required]]
    });
  }

  public async ngOnInit(): Promise<any> {
    this.queja = await this.navParams.get("queja")
    this.strapi.actualizarDato(
      "queysugs",
      this.queja.id,
      { visto: true }
    ).toPromise().then(_ => { })
  }

  public cerrarModal(): void {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  public enviarEmail(): void {
    this.socket.enviarNotificacion(
      this.queja.usuario,
      this.form.value.titulo,
      this.form.value.mensaje
    )
    this.clikTools.acceptMessage("Notificación enviada", "Se ha enviado una notificación a " + this.queja.usuario.username)
    this.cerrarModal()
  }
}
