import { Injectable } from '@angular/core';
import { CLIENTES } from "../../app/components/clientes/clientes.json";
import { Icliente } from "../interfaces/icliente";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { throwError } from 'rxjs';
import { Cliente } from '../clases/cliente.js';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes : Icliente[];
  private urlBackend = 'http://localhost:8080/api/';
  

  constructor(private _httpClient : HttpClient) { 
    this.clientes = CLIENTES;
  }
  
  
  getClientes() {
    return this._httpClient.get<Icliente[]>(`${this.urlBackend}clientes`).pipe(
      map(response => response as Cliente[])
    );
    //return CLIENTES;
  }

  
  deleteCliente(idCliente: string){
    console.log("delete cliente");
    return this._httpClient.delete(`${this.urlBackend}clientes/${idCliente}`).pipe(
      catchError(e=>{
        console.error(e.error.mensaje);
        Swal.fire('Error al eliminar cliente', e.error.mensaje,'error');
        return throwError(e);
      })
    );
    

  }
}
