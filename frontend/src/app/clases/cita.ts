import { Cliente } from "../clases/cliente";

export class Cita {
    id: number;
    fechaAsignacion: Date;
    estadoCita: boolean;
    cliente: Cliente;

}