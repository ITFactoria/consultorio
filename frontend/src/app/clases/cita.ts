import { Cliente } from "../clases/cliente";

export class Cita {
    private id: number;
    private fecha: string;
    private hora: string;
    private precio : number
    private fechaCreacion : string;
    private cliente: Cliente;
}