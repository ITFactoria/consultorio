import { Injectable } from '@angular/core';
import { CLIENTES } from "../../app/components/clientes/clientes.json";
import { Icliente } from "../interfaces/icliente";
import { HttpClient } from "@angular/common/http";


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
    return this._httpClient.get<Icliente[]>(`${this.urlBackend}clientes`);
    //return CLIENTES;
  }

  
  deleteCliente(idCliente: string){
    console.log("delete cliente");
    return this._httpClient.delete(`${this.urlBackend}clientes/${idCliente}`);
    

  }
}
