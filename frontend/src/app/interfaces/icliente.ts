import { Cita } from "../clases/cita";

export interface Icliente {
    idCliente: string;
    nombres: string;
    apellidos: string;
    direccion : string;
    telefono: string;
    sexo: string;
    caracteristicas: string;
    fechaCreacion: Date;
    citas : Array<Cita>;




}
