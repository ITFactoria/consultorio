import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Icliente } from "../interfaces/icliente";
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import  Swal  from "sweetalert2";
import { Router } from "@angular/router";
import { Cliente } from '../clases/cliente';
import { Municipio } from '../clases/municipio';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlBackend = 'http://localhost:8080/api/';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  

  constructor( private _httpClient: HttpClient, private _router: Router) { }

  getCliente(idCliente: string): Observable <Cliente>{
    return this._httpClient.get<Icliente>(`${this.urlBackend}clientes/${idCliente}`).pipe(
      map(response =>{
        //let cliente = response;
        return response;
      }),
      catchError(e =>{
        //this._router.navigate(['/clientes']);
        //this._router.navigate(['cliente']);
        
        console.error(e.error.mensaje);
        Swal.fire('Error al consultar paciente',e.error.mensaje,'error');
        //return e;
        return throwError(e);
      })
    );
  }

  updateCliente(idCliente : string, cliente: Icliente){
    return this._httpClient.put<Icliente>(`${this.urlBackend}clientes/${idCliente}`, cliente).pipe(
      catchError(e=>{
        if(e.status==400){
          return throwError(e);

        }
        console.error(e.error.mensaje);
        Swal.fire('Error al actualizar cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  addCliente(cliente: Icliente){
    return this._httpClient.post<Icliente>(`${this.urlBackend}clientes/`,cliente,{headers:this.httpHeaders}).
    pipe(
      catchError(e=>{
        if(e.status == 400){
          return throwError(e);

        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear cliente',e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  getMunicipios(){
    return this._httpClient.get<Municipio[]>(`${this.urlBackend}clientes/municipios`)
  }
}


