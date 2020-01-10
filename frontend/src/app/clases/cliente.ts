import { Icliente } from "../interfaces/icliente";
import { Municipio } from "../clases/municipio";


export class Cliente implements Icliente {
    idCliente : string;
    nombres: string;
    apellidos : string;
    direccion : string;
    municipio : Municipio;
    departamento: string;
    telefono: string;
    email: string;
    sexo: string;
    fechaNacimiento: string;
    caracteristicas: string;
    fechaCreacion: string;


}
