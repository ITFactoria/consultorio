import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http/";
import { Cita } from '../clases/cita';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private urlBackend = 'http://localhost:8080/api/';
  private citas : Array<Cita>;
  
  constructor(private _httpClient: HttpClient) { }

  getCitas(): Observable<Cita[]>{
    return this._httpClient.get<Cita[]>(`${this.urlBackend}citas`).pipe(
      map (response => response as Cita[]));

    
  }
}
