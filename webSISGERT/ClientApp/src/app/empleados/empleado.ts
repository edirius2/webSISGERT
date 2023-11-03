import { iEspecialidad } from "./especialidades/especialidad";

export interface IEmpleado {
  id: number,
  tipoDocumento: number,
  numeroDocumento:number,
  nombre: string,
  telefono: string,
  correoElectronico: string
  especialidadId: number,
  especialidad: iEspecialidad,
  costoHora:number,
}
