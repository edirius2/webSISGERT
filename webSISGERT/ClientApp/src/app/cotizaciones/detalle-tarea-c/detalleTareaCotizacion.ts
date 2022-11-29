import { ITarea } from "../../tareas/tarea";
import { iCotizacion } from "../cotizacion";

export interface iDetalleTareaCotizacion {
  id: number,
  tareaId: number,
  tarea: ITarea,
  cantidad: number,
  precio: number,
  hora: number,
  cotizacionId: number,
  cotizacion: iCotizacion
}
