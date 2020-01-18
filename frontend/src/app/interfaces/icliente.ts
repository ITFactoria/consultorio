import { Municipio } from "../clases/municipio";
import { Cita } from "../clases/cita";

export interface Icliente {
    idCliente: string;
    nombres: string;
    apellidos: string;
    direccion : string;
    municipio: Municipio;
    departamento: string;
    telefono: string;
    email: string;
    sexo: string;
    fechaNacimiento: string;
    caracteristicas: string;
    fechaCreacion: string;
    citas : Array<Cita>;




}
