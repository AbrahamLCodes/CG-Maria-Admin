import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from './providers/socket.service';
import { SpinnerService } from './services/spinner.service';
import { SesionService } from './servicios/sesion.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    public router: Router,
    private spiner: SpinnerService,
    private socket: SocketService,
    private sesion: SesionService
  ) {}

  public ngOnInit(): void{
    this.spiner.show();
    const user = this.sesion.getObjectUsuario()

    this.socket.actualizarPedido().subscribe(response => {
      //Enviar actualizacion
    });
  }
}
