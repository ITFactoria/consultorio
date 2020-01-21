import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/clases/cita';
import { CitasService } from 'src/app/services/citas.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";



@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  citas: Array<Cita> = [];
  dataSource = new MatTableDataSource(this.citas);
  displayedColumns: string[] = ['id', 'fechaAsignacion', 'idCliente', 'nombres', 'apellidos', 'estado', 'eliminar'];
  pipe: DatePipe;
  fechaAsignacionCompara : Date;

  filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
  });

  get fromDate() { return this.filterForm.get('fromDate').value;}
  get toDate() { return this.filterForm.get('toDate').value; }

  constructor(private _citasService: CitasService, private _router: Router, private _datePipe: DatePipe) {
    this.getCitas();
  }

  ngOnInit() {
    //this.getCitas();

  }

  getCitas() {
    this._citasService.getCitas().subscribe(
      response => {
        console.log("response getcitas");
        this.pipe = new DatePipe('en');
    
        console.log(response);
        this.citas = response;
        this.dataSource = new MatTableDataSource<Cita>(this.citas);
        console.log("getcitasdata")
        console.log(this.dataSource.data);
        this.dataSource.filterPredicate = (data, filter: string) => {
          console.log("fechaAsignacion");
          console.log(data.fechaAsignacion);

          
          console.log(new Date(data.fechaAsignacion));
          this.fechaAsignacionCompara = new Date(data.fechaAsignacion);
          data.fechaAsignacion = this.fechaAsignacionCompara;
          console.log(data.fechaAsignacion);
          
          
          
          console.log(this.fromDate);
          console.log(this.toDate);
          
          if (this.fromDate && this.toDate) {
            console.log("test");
            return data.fechaAsignacion >= this.fromDate && data.fechaAsignacion <= this.toDate;
            //return data.fechaAsignacion >= this.fromDate && data.fechaAsignacion <= this.toDate;
            
          }

          return true;
        }



      },
      error => {
        console.log("Error al consultar citas");
        Swal.fire(
          'Consultar citas',
          'error'
        )
      }
    );
  }

  applyFilter() {
    this.dataSource.filter = '' + Math.random();
  }

  attendCita(idCita: number) {
    console.log("Cita Atendida");
  }

  addCita() {
    this._router.navigate(['/cita']);

  }

  filtrar() {
    console.log("filtar data osurce");
    console.log(this.dataSource.data);



  }

}
