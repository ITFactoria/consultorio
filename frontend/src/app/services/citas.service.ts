import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http/";
import { Cita } from '../clases/cita';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import  Swal  from "sweetalert2";



@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private urlBackend = 'http://localhost:8080/api/';
  private citas : Array<Cita>;
  //private cita: Cita;
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
 
  
  constructor(private _httpClient: HttpClient) { }

  getCitas(): Observable<Cita[]>{
    return this._httpClient.get<Cita[]>(`${this.urlBackend}citas`).pipe(
      map (response => response as Cita[]));

    
  }

  addCita(cita: Cita) : Observable<Cita>{
    console.log("addCita Service");
    console.log(cita);
    return this._httpClient.post<Cita>(`${this.urlBackend}citas/`,cita,{headers:this.httpHeaders}).
    pipe(
      catchError(e=>{
        if(e.status == 400){
          return throwError(e);

        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear cita',e.error.mensaje, 'error');
        return throwError(e);
      })
    );

  }
}
