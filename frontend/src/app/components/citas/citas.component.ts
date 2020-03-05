import { Component, OnInit, ViewChild } from '@angular/core';
import { Cita } from 'src/app/clases/cita';
import { CitasService } from 'src/app/services/citas.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import * as moment from 'moment';



@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  citas: Array<Cita> = [];
  dataSource = new MatTableDataSource(this.citas);
  displayedColumns: string[] = ['id', 'fechaAsignacion', 'idCliente', 'nombres', 'apellidos'];
  pipe: DatePipe;
  fechaAsignacionCompara : Date;
  clienteId: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
  });

  
  get fromDate() { return this.filterForm.get('fromDate').value;}
  get toDate() { return this.filterForm.get('toDate').value; }

  constructor(private _citasService: CitasService, private _router: Router, private _datePipe: DatePipe) {
    //this.getCitas();
  }

  ngOnInit() {
    //this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getCitas();

  }

  getCitas() {
    this._citasService.getCitas().subscribe(
      response => {
        console.log("citas originales: ")
        console.log(response);
        
        this.pipe = new DatePipe('en');
    
        this.citas = response;
        this.dataSource = new MatTableDataSource<Cita>(this.citas);
        
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        
        
        this.dataSource.filterPredicate = (data, filter: string) => {
          this.clienteId = data.cliente.idCliente;
          //this.fechaAsignacionCompara = new Date(data.fechaAsignacion);
          
          
          this.fechaAsignacionCompara = new Date(data.fechaAsignacion);
          let fechaMoment : Date = moment(data.fechaAsignacion).toDate();
          
          
          console.log(`datafechaasignacionori= ${data.fechaAsignacion}`)
          console.log(`fechasignacioncompara= ${this.fechaAsignacionCompara}`);
          console.log(`fechaMoment= ${fechaMoment}`);
          

          //data.fechaAsignacion = this.fechaAsignacionCompara;
          data.fechaAsignacion = fechaMoment;
          
          if (this.fromDate && this.toDate) {
            return data.fechaAsignacion >= this.fromDate && data.fechaAsignacion <= this.toDate;
            
          }
          return this.clienteId.indexOf(filter) != -1;
         
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

  applyFilterId(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
}
