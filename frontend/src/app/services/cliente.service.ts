import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Icliente } from "../interfaces/icliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlBackend = 'http://localhost:8080/api/';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  

  constructor( private _httpClient: HttpClient) { }

  getCliente(idCliente: string){
    return this._httpClient.get<Icliente>(`${this.urlBackend}clientes/${idCliente}`);
  }

  updateCliente(idCliente : string, cliente: Icliente){
    return this._httpClient.put<Icliente>(`${this.urlBackend}clientes/${idCliente}`, cliente);
  }

  addCliente(cliente: Icliente){
    return this._httpClient.post<Icliente>(`${this.urlBackend}clientes/`,cliente,{headers:this.httpHeaders});
  }
}


