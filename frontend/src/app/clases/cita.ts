import { Cliente } from "../clases/cliente";

export class Cita {
    id: number;
    fechaAsignacion: string;
    estadoCita: boolean;
    cliente: Cliente;

}