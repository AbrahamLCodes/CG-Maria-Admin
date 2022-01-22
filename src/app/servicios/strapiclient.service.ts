import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class StrapiClientService {

  protected readonly strapilocal = "http://localhost:1337";
  protected readonly strapivps = "https://strapi.apphotelesmariabonita.com";
  protected readonly strapiurl = this.strapivps;

  constructor(
    protected req: HttpClient,
    private http: HttpClient,
    public alert: AlertController
  ) { }

  public obtenerDatos(tipo: string) {
    return this.http.get(`${this.strapiurl}/${tipo}`)
  }

  public obtenerDatoEspecifico(tipo: string, id: number) {
    return this.http.get(`${this.strapiurl}/${tipo}/${id}`)
  }

  public obtenerDatosEspecificosDeTipo(tipo: string, where: string, valor: any) {
    const body = {
      tipo: tipo,
      where: where,
      valor: valor
    }
    return this.http.post(`${this.strapiurl}/consultaCustom`, body)
  }

  public crearDato(tipo: string, body: any) {
    return this.http.post(`${this.strapiurl}/${tipo}`, body)
  }

  public actualizarDato(tipo: string, id: number, body: any) {
    return this.http.put(`${this.strapiurl}/${tipo}/${id}`, body)
  }

  public eliminarDato(tipo: string, id: number) {
    return this.http.delete(`${this.strapiurl}/${tipo}/${id}`)
  }

  public crearDatoConImagen(tipo: string, body: any, imagen: any, nombreImagen: any) {
    const formData = new FormData();
    formData.append("data", JSON.stringify(body));
    formData.append("files." + nombreImagen, imagen)
    return this.http.post(`${this.strapiurl}/${tipo}`, formData)
  }

  public crearDatoConImagenes(tipo: string, body: any, imagen: any[], nombreImagen: any[]) {
    const formData = new FormData();
    formData.append("data", JSON.stringify(body));

    for (let index = 0; index < imagen.length; index++) {
      formData.append("files." + nombreImagen[index], imagen[index])
    }

    return this.http.post(`${this.strapiurl}/${tipo}`, formData)
  }

  public actualizarDatoConImagen(tipo: string, id: number, body: any, imagen: any, nombreImagen: any) {
    const formData = new FormData();
    formData.append("data", JSON.stringify(body));
    formData.append("files." + nombreImagen, imagen)

    return this.http.put(`${this.strapiurl}/${tipo}/${id}`, formData)
  }

  public actualizarDatoConImagenes(tipo: string, id: number, body: any, imagen: any[], nombreImagen: any[]) {
    const formData = new FormData();
    formData.append("data", JSON.stringify(body));
    for (let index = 0; index < imagen.length; index++) {
      formData.append("files." + nombreImagen[index], imagen[index])
    }
    return this.http.put(`${this.strapiurl}/${tipo}/${id}`, formData)
  }

  public actualizarGaleria(tipo: string, id: number, nombreCampo: string, files: File[]) {
    const formData = new FormData()
    formData.append("data", JSON.stringify({}))
    files.forEach(file => {
      formData.append("files." + nombreCampo, file, file.name)
    })
    return this.http.put(`${this.strapiurl}/${tipo}/${id}`, formData)
  }

  public crearUsuario(body: any) {
    return this.http.post(`${this.strapiurl}/auth/local/register`, body)
      .pipe(catchError(this.registroError))
  }

  public crearUsuarioInfo(body: any, imagen: File) {
    const formData = new FormData();
    formData.append("data", JSON.stringify(body))
    formData.append("files.img", imagen)
    return this.http.post(`${this.strapiurl}/usuarioinfos`, formData)
  }

  public actualizarUsuarioInfo(id: number, imagen: File) {
    const formData = new FormData();
    formData.append("data", JSON.stringify({}))
    formData.append('files.img', imagen);
    return this.http.put(`${this.strapiurl}/usuarioinfos/${id}`, formData)
      .pipe(catchError(this.registroError))
  }

  public agregarImagenDeUsuario(id: number, img: File) {
    const formData = new FormData();
    formData.append('files.img', img);

    return this.http.put(`${this.strapiurl}/users/${id}`, formData)
  }

  public seleccionarDireccion(body: any) {
    return this.http.put(`${this.strapiurl}/seleccionarDireccion`, body)
  }

  public seleccionarTarjeta(body: any) {
    return this.http.put(`${this.strapiurl}/seleccionarTarjeta`, body)
  }

  public tarjetasPorUsuario(usuarioId: number) {
    return this.http.post(`${this.strapiurl}/tarjetasPorUsuario`, { usuarioId: usuarioId })
  }

  public monederoDeCliente(usuarioId: number) {
    return this.http.post(`${this.strapiurl}/monederoDeCliente`, { usuarioId: usuarioId })
  }

  public getDireccion(lat: number, long: number) {
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyC3QCWQ4xySdmPUdXOwUJRjPScjXT6SBTU`);
  }

  public getImagenURL(url: string) {
    return `${this.strapiurl + url}`;
  }

  public getBackgroundImagenURL(url: string) {
    return `background-image: url(${this.strapiurl + url});`;
  }

  public login(email: string, password: string) {
    return this.http.post(
      `${this.strapiurl}/auth/local`,
      { identifier: email, password: password })
      .pipe(catchError(this.loginerror))
  }

  public async registroError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      let alerter = new AlertController()
      const m = await alerter.create({
        header: "Oh no, ha ocurrido un error!",
        message: "Intenta más tarde",
        buttons: [
          {
            text: "OK"
          }
        ]
      })
      m.present()
    } else {
      let alerter = new AlertController()
      const m = await alerter.create({
        header: "No se puede registrar el usuario",
        message: "Posiblemente el nombre o el correo ya estén tomados",
        buttons: [
          {
            text: "OK"
          }
        ]
      })
      m.present()
    }
    return throwError(
      'Algo salió mal, intenta más tarde');
  }

  public async loginerror(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      let alerter = new AlertController()
      const m = await alerter.create({
        header: "Oh no, un error ha ocurrido!",
        message: "Intenta más tarde",
        buttons: [
          {
            text: "OK"
          }
        ]
      })
      m.present()
    } else {
      let alerter = new AlertController()
      const m = await alerter.create({
        header: "No se puede logear",
        message: "Verifica tus credenciales",
        buttons: [
          {
            text: "OK"
          }
        ]
      })
      m.present()
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  public send(body: any) {
    this.http.post(`${this.strapiurl}/sendemail`, body).subscribe((res) => { });
  }

  public abonoMultiple(usuarios: any[], abono: number) {
    return this.http.post(`${this.strapiurl}/abonoMultiple`, { usuarios, abono })
  }

  public guardarRecurso(modelo: string, json: any) {
    return this.req.post(`${this.strapiurl}/${modelo}`, json);
  }

  public crearPromo(body: any) {
    return this.req.post(`${this.strapiurl}/crearPromo`, body);
  }

  public actualizarPromo(id: number, promoBody: any) {
    return this.req.put(`${this.strapiurl}/actualizarPromo`, { id, promoBody });
  }

  public productosDisponiblesPromo(promo: any) {
    return this.req.post(`${this.strapiurl}/productosDisponiblesPromo`, { promo });
  }

  public eliminarPromo(promo: any) { 
    return this.req.post(`${this.strapiurl}/eliminarPromo`, { promo });
  }
}