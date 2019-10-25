import { Icliente } from "../interfaces/icliente";


export class Cliente implements Icliente {
    idCliente : string;
    nombres: string;
    apellidos : string;
    direccion : string;
    municipio : string;
    departamento: string;
    telefono: string;
    email: string;
    sexo: string;
    edad: number;
    caracteristicas: string;
    fechaCreacion: string;


}
