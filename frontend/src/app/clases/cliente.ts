import { Icliente } from "../interfaces/icliente";


export class Cliente implements Icliente {
    id : string;
    nombres: string;
    apellidos : string;
    direccion : string;
    telefono: string;
    municipio : string;
    fechaCreacion : string

}
