import { iCosto } from "../../../costos/costo";
import { iDetalleTarea } from "../detalleTarea";

export interface iDetalleCostoTarea {
  id: number,
  costoId: number,
  costo: iCosto,
  detalleTareaId: number,
  detalleTarea: iDetalleTarea,
  precio: number
}
