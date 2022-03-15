import { ITarea } from "../../tareas/tarea";
import { iOrdenTrabajo } from "../ordenTrabajo";


export interface iDetalleTarea {
  id: number,
  cantidad: number,
  precio: number,
  ordenTrabajoId: number,
  tareaId:number,
  tarea: ITarea,
  ordenTrabajo: iOrdenTrabajo

}
