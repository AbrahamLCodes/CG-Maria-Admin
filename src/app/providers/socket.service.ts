import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(
    private socket: Socket,
  ) { }

  public enviarActualizacion(usuario: any, pedido: any): void {
    this.socket.emit("actualizarPedido", { usuario, pedido });
  }

  public actualizarPedido(): Observable<any> {
    return this.socket.fromEvent("pedidoEnviado");
  }

  public enviarNotificacion(usuario: any, titulo: string, mensaje: string): void {
    this.socket.emit("enviarNotificacion", {usuario, titulo, mensaje});
  }
}