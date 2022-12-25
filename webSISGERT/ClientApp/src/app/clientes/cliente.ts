export enum enumTipoDocumento {
  DNI=0,
  RUC=1
}

export interface ICliente {
  id: number;
  tipoDocumento: enumTipoDocumento;
  numeroDocumento: string;
  nombre: string;
  contacto: string;
  telefono: string;
  correoElectronico: string;

}
