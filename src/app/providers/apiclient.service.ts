import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiclientService {

  // private url: String = 'http://localhost:8000/api/';
  public url: String = 'https://strapi.apphotelesmariabonita.com';
  // public url: String = 'http://127.0.0.1:1337';
  private jsonHeader: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  private imageHeader: HttpHeaders = new HttpHeaders({ 'Content-Type': 'image/jpeg' })

  private routes = {
    sucursales: "sucursales",
    pedidos: "pedidos",
    storeusuario: "storeusuario",
    usuarios: "usuarios",
    destroyusuario: "destroyusuario",
    accesos: "accesos",
    subaccesos: "subaccesos",
    showusuario: "showusuario",
    showimagen: "showimagen",
    updateusuario: "updateusuario",
    loginusuario: "loginusuario",
    productocategorias: "productocategorias",
    storeproductocategoria: "storeproductocategoria",
    showproductocategoria: "showproductocategoria",
    updateproductocategoria: "updateproductocategoria",
    destroyproductocategoria: "destroyproductocategoria",
    showproductocategoriasucursales: "showproductocategoriasucursales",
    complementos: "complementos",
    storecomplemento: "storecomplemento",
    showcomplemento: "showcomplemento",
    showcomplementosucursales: "showcomplementosucursales",
    updatecomplemento: "updatecomplemento",
    destroycomplemento: "destroycomplemento",
    showimagensucursal: "showimagensucursal",
    destroysucursal: "destroysucursal",
    storesucursal: "storesucursal",
    updatesucursal: "updatesucursal"
  }

  constructor(
    private http: HttpClient
  ) { }

  private serial(datos: { [nombre: string]: String | Number }): String {
    let cadaParametro: String[] = [];
    for (let nombreDelDato in datos)
      cadaParametro.push([nombreDelDato, datos[nombreDelDato]].join('='));
    return cadaParametro.join('&');
  }

  public getProductoCategorias() {
    return this.http.get(`${this.url}/${this.routes.productocategorias}`, { headers: this.jsonHeader });
  }

  public getComplementos() {
    return this.http.get(`${this.url}/${this.routes.complementos}`, { headers: this.jsonHeader });
  }

  public storeComplemento(titulo, precio, sucursales) {
    const formData = new FormData()
    formData.append("titulo", titulo)
    formData.append("precio", precio)
    formData.append("sucursales", JSON.stringify(sucursales))
    return this.http.post(`${this.url}/${this.routes.storecomplemento}`, formData);
  }

  public showComplemento(id_complemento) {
    let urlparams = new HttpParams().set("id_complemento", id_complemento)
    return this.http.get(`${this.url}/${this.routes.showcomplemento}`, { headers: this.jsonHeader, params: urlparams });
  }

  public showComplementoSucursales(id_complemento) {
    let urlparams = new HttpParams().set("id_complemento", id_complemento)
    return this.http.get(`${this.url}/${this.routes.showcomplementosucursales}`, { headers: this.jsonHeader, params: urlparams });
  }

  public updateComplemento(id_complemento, titulo, precio, sucursales) {
    const formData = new FormData()
    formData.append("id_complemento", id_complemento)
    formData.append("titulo", titulo)
    formData.append("precio", precio)
    formData.append("sucursales", JSON.stringify(sucursales))
    return this.http.post(`${this.url}/${this.routes.updatecomplemento}`, formData);
  }

  public destroyComplemento(id_complemento) {
    return this.http.post(`${this.url}/${this.routes.destroycomplemento}`, this.serial({ id_complemento }), { headers: this.jsonHeader });
  }

  public storeProductoCategoria(categoria, sucursales) {
    const formData = new FormData()
    formData.append("categoria", categoria)
    formData.append("sucursales", JSON.stringify(sucursales))
    return this.http.post(`${this.url}/${this.routes.storeproductocategoria}`, formData);
  }

  public showProductoCategoria(id_categoria) {
    let urlparams = new HttpParams().set("id_categoria", id_categoria)
    return this.http.get(`${this.url}/${this.routes.showproductocategoria}`, { headers: this.jsonHeader, params: urlparams });
  }

  public showProductoCategoriaSucursales(id_categoria) {
    let urlparams = new HttpParams().set("id_categoria", id_categoria)
    return this.http.get(`${this.url}/${this.routes.showproductocategoriasucursales}`, { headers: this.jsonHeader, params: urlparams });
  }

  public updateProductoCategoria(id_categoria, categoria, sucursales) {
    const formData = new FormData()
    formData.append("id_categoria", id_categoria)
    formData.append("categoria", categoria)
    formData.append("sucursales", JSON.stringify(sucursales))
    return this.http.post(`${this.url}/${this.routes.updateproductocategoria}`, formData);
  }

  public destroyproductocategoria(id_categoria) {
    //destroyproductocategoria
    return this.http.post(`${this.url}/${this.routes.destroyproductocategoria}`, this.serial({ id_categoria }), { headers: this.jsonHeader });
  }

  public login(email, password) {
    return this.http.post(`${this.url}/${this.routes.loginusuario}`, this.serial({ email, password }), { headers: this.jsonHeader });
  }

  public getSucursales() {
    return this.http.get(`${this.url}/${this.routes.sucursales}`, { headers: this.jsonHeader });
  }

  public storeSucursal(
    imagen, 
    nombre,
    activoOnline,
    direccion,
    precioMinimo,
    tipoEntrega,
    tipoCargo,
    gastoEnvio,
    porcentajeComision,
    pagoEfectivo,
    pagoMonedero,
    pagoTarjeta
  ) {
    const formData = new FormData()
    formData.append("imagen", imagen)
    formData.append("nombre", nombre)
    formData.append("activoOnline", activoOnline)
    formData.append("direccion", direccion)
    formData.append("precioMinimo", precioMinimo)
    formData.append("tipoEntrega", tipoEntrega)
    formData.append("tipoCargo", tipoCargo)
    formData.append("gastoEnvio", gastoEnvio)
    formData.append("porcentajeComision", porcentajeComision)
    formData.append("pagoEfectivo", pagoEfectivo)
    formData.append("pagoMonedero", pagoMonedero)
    formData.append("pagoTarjeta", pagoTarjeta)

    return this.http.post(`${this.url}/${this.routes.storesucursal}`, formData);
  }

  public showSucursal(id_sucursal) {
    let urlparams = new HttpParams().set("id_sucursal", id_sucursal)
    return this.http.get(`${this.url}/${this.routes.sucursales}`, { headers: this.jsonHeader, params: urlparams });
  }

  public showImageSucursal(imagen) {
    let urlparams = new HttpParams().set("imagen", imagen)
    return this.http.get(`${this.url}/${this.routes.showimagensucursal}`, { responseType: 'blob', params: urlparams });
  }

  public updateSucursal(
    id_sucursal,
    imagen,
    nombre,
    activoOnline,
    direccion,
    precioMinimo,
    tipoEntrega,
    tipoCargo,
    gastoEnvio,
    porcentajeComision,
    pagoEfectivo,
    pagoMonedero,
    pagoTarjeta) {
    const formData = new FormData()
    formData.append("id_sucursal", id_sucursal)
    formData.append("imagen", imagen)
    formData.append("nombre", nombre)
    formData.append("activoOnline", activoOnline)
    formData.append("direccion", direccion)
    formData.append("precioMinimo", precioMinimo) 
    formData.append("tipoEntrega", tipoEntrega)
    formData.append("tipoCargo", tipoCargo)
    formData.append("gastoEnvio", gastoEnvio)
    formData.append("porcentajeComision", porcentajeComision)
    formData.append("pagoEfectivo", pagoEfectivo)
    formData.append("pagoMonedero", pagoMonedero)
    formData.append("pagoTarjeta", pagoTarjeta)

    return this.http.post(`${this.url}/${this.routes.updatesucursal}`, formData);
  }

  public destroySucursal(id_sucursal) {
    return this.http.post(`${this.url}/${this.routes.destroysucursal}`, this.serial({ id_sucursal }), { headers: this.jsonHeader });
  }

  public getPedidos() {
    return this.http.get(`${this.url}/${this.routes.pedidos}`, { headers: this.jsonHeader });
  }

  public getUsuarios() {
    return this.http.get(`${this.url}/${this.routes.usuarios}`, { headers: this.jsonHeader });
  }

  public showUsuario(id_usuario) {
    let urlparams = new HttpParams().set("id_usuario", id_usuario)
    return this.http.get(`${this.url}/${this.routes.showusuario}`, { headers: this.jsonHeader, params: urlparams });
  }

  public showImageUsuario(imagen) {
    let urlparams = new HttpParams().set("imagen", imagen)
    return this.http.get(`${this.url}/${this.routes.showimagen}`, { responseType: 'blob', params: urlparams });
  }

  public storeUsuario(nombre, email, password, rol, estatus, accesos, subaccesos, imagen) {
    if (accesos === undefined) {
      accesos = []
    }

    if (subaccesos === undefined) {
      subaccesos = []
    }

    const formData = new FormData()
    formData.append("nombre", nombre)
    formData.append("email", email)
    formData.append("password", password)
    formData.append("rol", rol)
    formData.append("estatus", estatus)
    formData.append("accesos", JSON.stringify(accesos))
    formData.append("subaccesos", JSON.stringify(subaccesos))
    formData.append("imagen", imagen)

    return this.http.post(`${this.url}/${this.routes.storeusuario}`, formData);
  }

  public updateUsuario(id_usuario, nombre, email, password, rol, estatus, accesos, subaccesos, imagen) {
    if (accesos === undefined) {
      accesos = []
    }

    let accesosArray = []
    for (let i = 0; i < accesos.length; i++) {
      accesosArray.push(accesos[i])
    }

    if (subaccesos === undefined) {
      subaccesos = []
    }
    let subsArray = []
    for (let i = 0; i < subaccesos.length; i++) {
      subsArray.push(subaccesos[i])
    }

    const formData = new FormData()
    formData.append("id_usuario", id_usuario)
    formData.append("nombre", nombre)
    formData.append("email", email)
    formData.append("password", password)
    formData.append("rol", rol)
    formData.append("estatus", estatus)
    formData.append("accesos", JSON.stringify(accesos))
    formData.append("subaccesos", JSON.stringify(subaccesos))
    formData.append("imagen", imagen)

    return this.http.post(`${this.url}/${this.routes.updateusuario}`, formData);
  }

  public destroyUsuario(id_usuario) {
    return this.http.post(`${this.url}/${this.routes.destroyusuario}`, this.serial({ id_usuario }), { headers: this.jsonHeader });
  }

  public getAccesos(id_usuario) {
    let urlparams = new HttpParams().set("id_usuario", id_usuario)
    return this.http.get(`${this.url}/${this.routes.accesos}`, { headers: this.jsonHeader, params: urlparams });
  }

  public getSubaccesos(id_usuario) {
    let urlparams = new HttpParams().set("id_usuario", id_usuario)
    return this.http.get(`${this.url}/${this.routes.subaccesos}`, { headers: this.jsonHeader, params: urlparams });
  }

  //Nuevas funciones
  
  public getRecurso(modelo: string) {
    return this.http.get(`${this.url}/${modelo}`);
  }

  public guardarRecurso(modelo: string, json: any){
    return this.http.post(`${this.url}/${modelo}`,json); 
  }

  public eliminarUnRecurso(modelo: string, id: number){
    return this.http.delete(`${this.url}/${modelo}/${id}`);
  }

  public mostrarUnRecursoEspecifico(modelo: string, id: any) {
    return this.http.get(`${this.url}/${modelo}/${id}`);
  }

  public actualizarUnRecurso(modelo: string, id: number, recurso: any){
    return this.http.put(`${this.url}/${modelo}/${id}`, recurso);
  }


}