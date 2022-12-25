import { ICliente } from "../clientes/cliente";
import { iDetalleTarea } from "./detalle-tarea/detalleTarea";
import { IDetallePago } from "./detalle-pago/detallePago";
import { IDetalleEmpleado } from "./detalle-empleado/detalleEmpleado";
import { iMaquinaria } from "../maquinarias/maquinaria";

export enum EstadoOT {
  Activo,
  Cancelado,
  Cerrado
}

export interface iOrdenTrabajo {
  id: number,
  codigo: string,
  clienteId: number,
  cliente: ICliente,
  favorito: boolean,
  maquinariaId: number,
  maquinaria: iMaquinaria,
  fecha: Date,
  descripcion: string,
  observaciones: string,
  informePreliminar: string,
  formatoRecepcionEquipos: string,
  actaConformidad: string,
  estadoOT: EstadoOT,
  detallesTareas: iDetalleTarea[],
  detallesPagos: IDetallePago[],
  detallesEmpleados: IDetalleEmpleado[],
  sumaPagos: number,
  sumaTareas: number,
}
