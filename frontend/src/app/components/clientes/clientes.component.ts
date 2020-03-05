import { Component, OnInit, ViewChild } from '@angular/core';
import { Icliente } from "../../interfaces/icliente";
import { ClientesService } from "../../services/clientes.service";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from "@angular/material/sort";





@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Icliente[];
  flagClienteNuevo: boolean = false;
  message: string;
  flagClienteEliminado = false;
  flagProblemasTecnicos = false;

  displayedColumns: string[] = ['idCliente', 'nombres', 'apellidos', 'direccion', 'telefono', 'consultar', 'eliminar'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(private _clientesService: ClientesService, private _router: Router) { }

  ngOnInit() {

    this.getClientes();



    //this.dataSource.paginator = this.paginator;
  }


  handleResponseError(error) {
    console.log(error);
    console.log(error.error);
    console.log(error.message);
  }

  getClientes() {
    this._clientesService.getClientes().subscribe(
      response => {
        this.clientes = response;
        this.dataSource = new MatTableDataSource<Icliente>(this.clientes);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;


      },
      error => {
        console.log('Error al consultar clientes');
        this.flagProblemasTecnicos = true;
        this.message = 'Problemas tecnicos presentados. Por favor contacte a soporte tecnico.';

      }
    );

  }

  applyFilterId(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  getCliente(idCliente: string) {
    this._router.navigate(['read-cliente', idCliente]);
  }

  addCliente() {
    console.log('adicionar cliente');
    this.flagClienteNuevo = true;
    this._router.navigate(['cliente']);
  }

  deleteCliente(idCliente: string) {
    console.log("Eliminar cliente:" + idCliente);
    Swal.fire({
      title: 'Está seguro?',
      text: "Usted no podra revertir esta operacion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No, cancelar!',

      confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
      if (result.value) {
        this._clientesService.deleteCliente(idCliente).subscribe(
          response => {
            //this.message = `Cliente con cedula ${idCliente} eliminado exitosamente`;
            this.flagClienteEliminado = true;
            Swal.fire(
              'Eliminar cliente',
              `Cliente con CC ${idCliente} eliminado exitosamente!`,
              'success'
            )
            this.getClientes();

          },
          error => { this.handleResponseError; }
        );

      }
    })

  }


}
