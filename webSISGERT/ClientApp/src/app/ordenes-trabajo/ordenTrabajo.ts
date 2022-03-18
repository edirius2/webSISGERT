import { ICliente } from "../clientes/cliente";
import { iDetalleTarea } from "./detalle-tarea/detalleTarea";
import { IDetallePago } from "./detalle-pago/detallePago";
import { IDetalleEmpleado } from "./detalle-empleado/detalleEmpleado";

export interface iOrdenTrabajo {
  id: number,
  codigo: string,
  clienteId:number,
  cliente: ICliente,
  fecha: Date,
  precioReferencial: number,
  detallesTareas: iDetalleTarea[],
  detallesPagos: IDetallePago[],
  detallesEmpleados: IDetalleEmpleado[],
  sumaPagos: number,
  sumaTareas: number,
}
