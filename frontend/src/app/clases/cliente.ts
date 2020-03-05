import { Icliente } from "../interfaces/icliente";
import { Municipio } from "../clases/municipio";
import { Cita } from "../clases/cita";


export class Cliente implements Icliente {
    idCliente : string;
    nombres: string;
    apellidos : string;
    direccion : string;
    telefono: string;
    sexo: string;
    caracteristicas: string;
    fechaCreacion: string;
    citas : Array<Cita> = [];

}
