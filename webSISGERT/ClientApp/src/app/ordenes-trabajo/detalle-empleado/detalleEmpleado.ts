import { IEmpleado } from "../../empleados/empleado";
import { iOrdenTrabajo } from "../ordenTrabajo";

export interface IDetalleEmpleado {
  id: number,
  empleadoId: number,
  empleado: IEmpleado,
  ordenTrabajoId: number,
  ordenTrabajo: iOrdenTrabajo,
  horas:number
}
