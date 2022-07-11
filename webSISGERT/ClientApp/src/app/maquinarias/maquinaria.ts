import { iMarcaMaquinaria } from "./marca-maquinaria/marcaMaquinaria";
import { iTipoMaquinaria } from "./tipo-maquinaria/tipoMaquinaria";
import { iEstadoMaquinaria } from "./estado-maquinarias/estadoMaquinaria";
import { ICliente } from "../clientes/cliente";

export interface iMaquinaria {
  id: number,
  placa: string,
  marcaMaquinariaId: number,
  marca: iMarcaMaquinaria,
  tipoMaquinariaId: number,
  tipo: iTipoMaquinaria,
  estadoMaquinariaId: number,
  estado: iEstadoMaquinaria,
  clienteId: number,
  cliente: ICliente
}
