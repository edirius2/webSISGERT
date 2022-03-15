import { iOrdenTrabajo } from "../ordenTrabajo";

export interface IDetallePago {
  id: number,
  pago: number,
  fecha: Date,
  ordenTrabajoId: number,
  ordenTrabajo: iOrdenTrabajo
}
