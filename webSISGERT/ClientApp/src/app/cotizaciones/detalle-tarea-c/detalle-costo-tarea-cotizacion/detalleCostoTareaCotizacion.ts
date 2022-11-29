import { iCosto } from "../../../costos/costo";
import { iDetalleTareaCotizacion } from "../detalleTareaCotizacion";

export interface iDetalleCostoTareaCotizacion {
  id: number,
  costoId: number,
  costo: iCosto,
  detalleTareaCotizacionId: number,
  detalleTareaCotizacion: iDetalleTareaCotizacion,
  precio: number
}
