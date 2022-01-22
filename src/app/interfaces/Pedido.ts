export default interface Pedido {
    id_pedido: number;
    nombreUsuario: string;
    serial: string;
    sucursal: number;
    cargosucursal: number;
    cargoenvio: number;
    total: number;
    estatus: string
}