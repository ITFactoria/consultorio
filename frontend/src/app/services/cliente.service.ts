import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Icliente } from "../interfaces/icliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor( private _httpClient: HttpClient) { }

  getCliente(idCliente: string){
    return this._httpClient.get<Icliente>(`http://localhost:8080/clientes/${idCliente}`);

  }
}


