import { Injectable } from '@angular/core';
import { StrapiClientService } from '../servicios/strapiclient.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private strapi: StrapiClientService
  ) { }

  public async clientes() {
    let clientes: any
    await this.strapi.obtenerDatosEspecificosDeTipo(
      "users",
      "tipo",
      "CLIENTE"
    ).toPromise().then(response => {
      clientes = response
    })
    return clientes
  }

  public async quejas() {
    let quejas: any
    await this.strapi.obtenerDatos(
      "queysugs" 
    ).toPromise().then(response => {
      quejas = response
    })
    return quejas
  }

  public async promociones(): Promise<any> {
    let promociones: any;
    await this.strapi.obtenerDatos("promocions")
    .toPromise().then(response => {
      promociones = response;
    });
    return promociones;
  }

  public async productosSinPromo(): Promise<any> {
    let productos: any;
    await this.strapi.obtenerDatosEspecificosDeTipo(
      "productos",
      "promocion",
      false
    ).toPromise().then(response => {
      productos = response;
    });
    return productos;
  }

  public async productosDisponiblesPromo(promocion): Promise<any> {
    let productos: any;
    await this.strapi.productosDisponiblesPromo(promocion)
    .toPromise().then(response => {
      productos = response;
    });
    return productos;
  }

  public async sucursales(): Promise<any> {
    let sucursales: any;
    await this.strapi.obtenerDatos("sucursales")
    .toPromise().then(response => {
      sucursales = response;
    })
    return sucursales;
  }
}
