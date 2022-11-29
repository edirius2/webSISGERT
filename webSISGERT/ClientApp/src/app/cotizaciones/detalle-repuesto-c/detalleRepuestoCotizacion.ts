import { IRepuesto } from "../../repuestos/repuesto";
import { iCotizacion } from "../cotizacion";

export interface iDetalleRepuestoCotizacion {
  id: number,
  repuestoId: number,
  repuesto: IRepuesto,
  cotizacionId: number,
  cotizacion: iCotizacion,
  cantidad: number,
  costoRepuesto: number
}
