import { iCotizacion } from "./cotizacion";
import { iOrdenTrabajo } from "../ordenes-trabajo/ordenTrabajo";

export interface iCotizacion_OT {
  cotizacionId: number,
  ordenTrabajoId: number,
  cotizacion: iCotizacion,
  ordenTrabajo: iOrdenTrabajo
}
