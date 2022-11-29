import { iCosto } from "../../costos/costo";
import { iCotizacion } from "../cotizacion";

export interface iDetalleCostoCotizacion {
  id: number,
  costoId: number,
  costo: iCosto,
  precio: number,
  cotizacionId: number,
  cotizacion: iCotizacion
}
