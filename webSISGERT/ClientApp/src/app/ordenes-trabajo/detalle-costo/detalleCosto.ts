import { iOrdenTrabajo } from "../ordenTrabajo";
import { iCosto } from "../../costos/costo";

export interface iDetalleCosto {
  id: number,
  ordenTrabajoId: number,
  ordenTrabajo: iOrdenTrabajo,
  costoId: number,
  costo: iCosto,
  precio: number
}
