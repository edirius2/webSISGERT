import { ICliente } from "../clientes/cliente";
import { iMaquinaria } from "../maquinarias/maquinaria";
import { iDetalleTareaCotizacion } from "./detalle-tarea-c/detalleTareaCotizacion";
import { iDetalleRepuestoCotizacion } from "./detalle-repuesto-c/detalleRepuestoCotizacion";
import { iDetalleCostoCotizacion } from "./detalle-gasto-c/detalleCostoCotizacion";
import { iCotizacion_OT } from "./Cotizacion_OT";

export interface iCotizacion {
  id: number,
  codigo: string,
  descripcion:string,
  clienteId: number,
  cliente: ICliente,
  maquinariaId: number,
  maquinaria: iMaquinaria,
  fecha: Date,
  estado: string,
  enlazado: boolean,
  observaciones: string,
  detallesTareas: iDetalleTareaCotizacion[],
  detallesRepuestos: iDetalleRepuestoCotizacion[],
  detallesCostos: iDetalleCostoCotizacion[],
  ordenesTrabajo: iCotizacion_OT[]
}
