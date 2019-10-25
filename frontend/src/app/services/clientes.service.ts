import { Injectable } from '@angular/core';
import { CLIENTES } from "../../app/components/clientes/clientes.json";
import { Icliente } from "../interfaces/icliente";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes : Icliente[];

  constructor(private _httpClient : HttpClient) { 
    this.clientes = CLIENTES;
  }
  
  
  getClientes() {
    return this._httpClient.get<Icliente[]>('http://localhost:8080/clientes');
    
    //return CLIENTES;
  }

  getClientesPathVariable(name){
    return this._httpClient.get(`http://localhost:8080/consultorio-bean/path-variable/${name}`);
    
  }

  deleteCliente(idCliente: string){
    return this._httpClient.delete(`http://localhost:8080/clientes/${idCliente}`);

  }
}
