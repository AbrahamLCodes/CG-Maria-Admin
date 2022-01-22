import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoSessionGuard } from './guards/nosession.guard';
import { SessionGuard } from './guards/session.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu y categorias/menu/menu.module').then( m => m.MenuPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-restaurante',
    loadChildren: () => import('./opciones-restaurante/opciones-restaurante.module').then( m => m.OpcionesRestaurantePageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-reportes',
    loadChildren: () => import('./opciones-reportes/opciones-reportes.module').then( m => m.OpcionesReportesPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'reporte-ingresos',
    loadChildren: () => import('./reporte-ingresos/reporte-ingresos.module').then( m => m.ReporteIngresosPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'reporte-pedidos',
    loadChildren: () => import('./reporte-pedidos/reporte-pedidos.module').then( m => m.ReportePedidosPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-ver-ingresos',
    loadChildren: () => import('./modal-ver-ingresos/modal-ver-ingresos.module').then( m => m.ModalVerIngresosPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-ingresos-item',
    loadChildren: () => import('./opciones-ingresos-item/opciones-ingresos-item.module').then( m => m.OpcionesIngresosItemPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'mail-send',
    loadChildren: () => import('./mail-send/mail-send.module').then( m => m.MailSendPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoSessionGuard]
  },
  {
    path: 'modalpedido',
    loadChildren: () => import('./modalpedido/modalpedido.module').then( m => m.ModalpedidoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-menu',
    loadChildren: () => import('./opciones-menu/opciones-menu.module').then( m => m.OpcionesMenuPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-crud',
    loadChildren: () => import('./opciones-crud/opciones-crud.module').then( m => m.OpcionesCrudPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-crear-nuevo',
    loadChildren: () => import('./menu y categorias/modal-crear-nuevo/modal-crear-nuevo.module').then( m => m.ModalCrearNuevoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-cargar-csv',
    loadChildren: () => import('./modal-cargar-csv/modal-cargar-csv.module').then( m => m.ModalCargarCsvPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-cargar-edit-menu',
    loadChildren: () => import('./modal-cargar-edit-menu/modal-cargar-edit-menu.module').then( m => m.ModalCargarEditMenuPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-carta',
    loadChildren: () => import('./menu y categorias/modal-carta/modal-carta.module').then( m => m.ModalCartaPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-ver-producto',
    loadChildren: () => import('./menu y categorias/modal-ver-producto/modal-ver-producto.module').then( m => m.ModalVerProductoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-editar',
    loadChildren: () => import('./menu y categorias/modal-editar/modal-editar.module').then( m => m.ModalEditarPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-editar-cat',
    loadChildren: () => import('./menu y categorias/modal-editar-cat/modal-editar-cat.module').then( m => m.ModalEditarCatPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-ver-cat',
    loadChildren: () => import('./menu y categorias/modal-ver-cat/modal-ver-cat.module').then( m => m.ModalVerCatPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-nueva-cat',
    loadChildren: () => import('./menu y categorias/modal-nueva-cat/modal-nueva-cat.module').then( m => m.ModalNuevaCatPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-nuevo-com',
    loadChildren: () => import('./menu y categorias/modal-nuevo-com/modal-nuevo-com.module').then( m => m.ModalNuevoComPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-editar-com',
    loadChildren: () => import('./menu y categorias/modal-editar-com/modal-editar-com.module').then( m => m.ModalEditarComPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-ver-com',
    loadChildren: () => import('./menu y categorias/modal-ver-com/modal-ver-com.module').then( m => m.ModalVerComPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-cat',
    loadChildren: () => import('./opciones-cat/opciones-cat.module').then( m => m.OpcionesCatPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-com',
    loadChildren: () => import('./opciones-com/opciones-com.module').then( m => m.OpcionesComPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-categoria',
    loadChildren: () => import('./opciones-categoria/opciones-categoria.module').then( m => m.OpcionesCategoriaPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-complementos',
    loadChildren: () => import('./opciones-complementos/opciones-complementos.module').then( m => m.OpcionesComplementosPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'usuariosapp',
    loadChildren: () => import('./usuarios-app/usuariosapp/usuariosapp.module').then( m => m.UsuariosappPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-usuarios-app',
    loadChildren: () => import('./opciones-usuarios-app/opciones-usuarios-app.module').then( m => m.OpcionesUsuariosAppPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'notificaciones-push',
    loadChildren: () => import('./notificaciones-push/notificaciones-push.module').then( m => m.NotificacionesPushPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-nuevo-usuario',
    loadChildren: () => import('./usuarios-app/modal-nuevo-usuario/modal-nuevo-usuario.module').then( m => m.ModalNuevoUsuarioPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-edit-usuario',
    loadChildren: () => import('./usuarios-app/modal-edit-usuario/modal-edit-usuario.module').then( m => m.ModalEditUsuarioPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-ver-usuario',
    loadChildren: () => import('./usuarios-app/modal-ver-usuario/modal-ver-usuario.module').then( m => m.ModalVerUsuarioPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-item-usuario',
    loadChildren: () => import('./opciones-item-usuario/opciones-item-usuario.module').then( m => m.OpcionesItemUsuarioPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-notificaciones-push',
    loadChildren: () => import('./modal-notificaciones-push/modal-notificaciones-push.module').then( m => m.ModalNotificacionesPushPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-ver-notificacion-push',
    loadChildren: () => import('./modal-ver-notificacion-push/modal-ver-notificacion-push.module').then( m => m.ModalVerNotificacionPushPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-editar-notificaciones-push',
    loadChildren: () => import('./modal-editar-notificaciones-push/modal-editar-notificaciones-push.module').then( m => m.ModalEditarNotificacionesPushPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-notificaciones-push',
    loadChildren: () => import('./opciones-notificaciones-push/opciones-notificaciones-push.module').then( m => m.OpcionesNotificacionesPushPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'sucursales-restaurante',
    loadChildren: () => import('./sucursales/sucursales-restaurante/sucursales-restaurante.module').then( m => m.SucursalesRestaurantePageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-nueva-sucursal',
    loadChildren: () => import('./sucursales/modal-nueva-sucursal/modal-nueva-sucursal.module').then( m => m.ModalNuevaSucursalPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-editar-sucursal',
    loadChildren: () => import('./sucursales/modal-editar-sucursal/modal-editar-sucursal.module').then( m => m.ModalEditarSucursalPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-ver-sucursal',
    loadChildren: () => import('./sucursales/modal-ver-sucursal/modal-ver-sucursal.module').then( m => m.ModalVerSucursalPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-sucursales',
    loadChildren: () => import('./sucursales/opciones-sucursales/opciones-sucursales.module').then( m => m.OpcionesSucursalesPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-sucursales-item',
    loadChildren: () => import('./sucursales/opciones-sucursales-item/opciones-sucursales-item.module').then( m => m.OpcionesSucursalesItemPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'marketing-opciones',
    loadChildren: () => import('./marketing-opciones/marketing-opciones.module').then( m => m.MarketingOpcionesPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'fidelizacion',
    loadChildren: () => import('./fidelizacion/fidelizacion.module').then( m => m.FidelizacionPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'fidelizacion-opciones',
    loadChildren: () => import('./fidelizacion-opciones/fidelizacion-opciones.module').then( m => m.FidelizacionOpcionesPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'cupones',
    loadChildren: () => import('./cupones/cupones/cupones.module').then( m => m.CuponesPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'monedero',
    loadChildren: () => import('./monedero/monedero.module').then( m => m.MonederoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'promociones',
    loadChildren: () => import('./promos/promociones/promociones.module').then( m => m.PromocionesPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-nuevo-cupon',
    loadChildren: () => import('./cupones/modal-nuevo-cupon/modal-nuevo-cupon.module').then( m => m.ModalNuevoCuponPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-edit-cupon',
    loadChildren: () => import('./cupones/modal-edit-cupon/modal-edit-cupon.module').then( m => m.ModalEditCuponPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-ver-cupon',
    loadChildren: () => import('./cupones/modal-ver-cupon/modal-ver-cupon.module').then( m => m.ModalVerCuponPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-cupones',
    loadChildren: () => import('./cupones/opciones-cupones/opciones-cupones.module').then( m => m.OpcionesCuponesPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-historial-monedero',
    loadChildren: () => import('./modal-historial-monedero/modal-historial-monedero.module').then( m => m.ModalHistorialMonederoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-descontar-monedero',
    loadChildren: () => import('./modal-descontar-monedero/modal-descontar-monedero.module').then( m => m.ModalDescontarMonederoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-abonar-monedero',
    loadChildren: () => import('./modal-abonar-monedero/modal-abonar-monedero.module').then( m => m.ModalAbonarMonederoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-monedero',
    loadChildren: () => import('./opciones-monedero/opciones-monedero.module').then( m => m.OpcionesMonederoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-nueva-promo',
    loadChildren: () => import('./promos/modal-nueva-promo/modal-nueva-promo.module').then( m => m.ModalNuevaPromoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-edit-promo',
    loadChildren: () => import('./modal-edit-promo/modal-edit-promo.module').then( m => m.ModalEditPromoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-ver-promo',
    loadChildren: () => import('./promos/modal-ver-promo/modal-ver-promo.module').then( m => m.ModalVerPromoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-promos',
    loadChildren: () => import('./promos/opciones-promos/opciones-promos.module').then( m => m.OpcionesPromosPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-configuraciones',
    loadChildren: () => import('./opciones-configuraciones/opciones-configuraciones.module').then( m => m.OpcionesConfiguracionesPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-usuarios-sistema',
    loadChildren: () => import('./modal-usuarios-sistema/modal-usuarios-sistema.module').then( m => m.ModalUsuariosSistemaPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-keys-pagos',
    loadChildren: () => import('./modal-keys-pagos/modal-keys-pagos.module').then( m => m.ModalKeysPagosPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'usuarios-sistema',
    loadChildren: () => import('./usuarios-sistemas/usuarios-sistema/usuarios-sistema.module').then( m => m.UsuariosSistemaPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-usuarios-sistema',
    loadChildren: () => import('./usuarios-sistemas/opciones-usuarios-sistema/opciones-usuarios-sistema.module').then( m => m.OpcionesUsuariosSistemaPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-usuarios-sistema-item',
    loadChildren: () => import('./usuarios-sistemas/opciones-usuarios-sistema-item/opciones-usuarios-sistema-item.module').then( m => m.OpcionesUsuariosSistemaItemPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-nuevo-usuario-sistema',
    loadChildren: () => import('./usuarios-sistemas/modal-nuevo-usuario-sistema/modal-nuevo-usuario-sistema.module').then( m => m.ModalNuevoUsuarioSistemaPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-edit-usuarios-sistema',
    loadChildren: () => import('./usuarios-sistemas/modal-edit-usuarios-sistema/modal-edit-usuarios-sistema.module').then( m => m.ModalEditUsuariosSistemaPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-ver-usuarios-sistema',
    loadChildren: () => import('./usuarios-sistemas/modal-ver-usuarios-sistema/modal-ver-usuarios-sistema.module').then( m => m.ModalVerUsuariosSistemaPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-devolucion',
    loadChildren: () => import('./modal-devolucion/modal-devolucion.module').then( m => m.ModalDevolucionPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-nuevo-producto',
    loadChildren: () => import('./productos/modal-nuevo-producto/modal-nuevo-producto.module').then( m => m.ModalNuevoProductoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-editar-producto',
    loadChildren: () => import('./productos/modal-editar-producto/modal-editar-producto.module').then( m => m.ModalEditarProductoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-sec-ver-producto',
    loadChildren: () => import('./productos/modal-sec-ver-producto/modal-sec-ver-producto.module').then( m => m.ModalSecVerProductoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'client-cot-event',
    loadChildren: () => import('./client-cot-event/client-cot-event.module').then( m => m.ClientCotEventPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'cliky-notes',
    loadChildren: () => import('./cliky-notes/cliky-notes.module').then( m => m.ClikyNotesPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-seguimiento-item',
    loadChildren: () => import('./opciones-seguimiento-item/opciones-seguimiento-item.module').then( m => m.OpcionesSeguimientoItemPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-seguimiento',
    loadChildren: () => import('./opciones-seguimiento/opciones-seguimiento.module').then( m => m.OpcionesSeguimientoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-ver-seguimiento',
    loadChildren: () => import('./modal-ver-seguimiento/modal-ver-seguimiento.module').then( m => m.ModalVerSeguimientoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-nuevo-seguimiento',
    loadChildren: () => import('./modal-nuevo-seguimiento/modal-nuevo-seguimiento.module').then( m => m.ModalNuevoSeguimientoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-nueva-cotizacion',
    loadChildren: () => import('./modal-nueva-cotizacion/modal-nueva-cotizacion.module').then( m => m.ModalNuevaCotizacionPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-nuevo-contrato',
    loadChildren: () => import('./modal-nuevo-contrato/modal-nuevo-contrato.module').then( m => m.ModalNuevoContratoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-editar-seguimiento',
    loadChildren: () => import('./modal-editar-seguimiento/modal-editar-seguimiento.module').then( m => m.ModalEditarSeguimientoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-agendar-seguimiento',
    loadChildren: () => import('./modal-agendar-seguimiento/modal-agendar-seguimiento.module').then( m => m.ModalAgendarSeguimientoPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'quejas',
    loadChildren: () => import('./quejas/quejas.module').then( m => m.QuejasPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-item-quejas',
    loadChildren: () => import('./opciones-item-quejas/opciones-item-quejas.module').then( m => m.OpcionesItemQuejasPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'opciones-quejas',
    loadChildren: () => import('./opciones-quejas/opciones-quejas.module').then( m => m.OpcionesQuejasPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-ver-quejas',
    loadChildren: () => import('./modal-ver-quejas/modal-ver-quejas.module').then( m => m.ModalVerQuejasPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-nuevo-repartidor-sistema',
    loadChildren: () => import('./usuarios-sistemas/modal-nuevo-repartidor-sistema/modal-nuevo-repartidor-sistema.module').then( m => m.ModalNuevoRepartidorSistemaPageModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'modal-edit-repartidor-sistema',
    loadChildren: () => import('./usuarios-sistemas/modal-edit-repartidor-sistema/modal-edit-repartidor-sistema.module').then( m => m.ModalEditRepartidorSistemaPageModule),
    canActivate: [SessionGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
