import { IRepuesto } from "../../repuestos/repuesto";
import { iOrdenTrabajo } from "../ordenTrabajo";

export interface IDetalleRepuesto {
  id: number,
  cantidad: number,
  precio: number,
  repuestoId: number,
  repuesto: IRepuesto,
  ordenTrabajoId: number,
  ordenTrabajo: iOrdenTrabajo
}
