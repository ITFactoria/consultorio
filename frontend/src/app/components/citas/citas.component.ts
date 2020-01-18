import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/clases/cita';
import { CitasService } from 'src/app/services/citas.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';







@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  citas: Array<Cita> =[];
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'fechaAsignacion', 'idCliente', 'nombres', 'apellidos','estado','eliminar'];

  

  constructor(private _citasService: CitasService, private _router: Router, private _datePipe: DatePipe) { }

  ngOnInit() {
    this.getCitas();
  }

  getCitas(){
    console.log("getCitas commponent");
    this._citasService.getCitas().subscribe(
      response =>{ 
        console.log(response);
        this.citas = response;
        //this.citas.forEach cita.fechaAsignacion = this._datePipe.transform(new Date(),'yyyy-mm-dd');
   
        this.dataSource = new MatTableDataSource<Cita>(this.citas);
      },
      error =>{
        console.log("Error al consultar citas");
        Swal.fire(
          'Consultar citas',
          'error'
        )
      }
    );


  }

  attendCita(idCita:number){
    console.log("Cita Atendida");
  }

  addCita(){
    this._router.navigate(['/cita']);

  }

}
