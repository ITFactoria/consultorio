import { Component, OnInit } from '@angular/core';
import { Icliente } from "../../interfaces/icliente";
import { ClientesService } from "../../services/clientes.service";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';



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

  constructor(private _clientesService: ClientesService, private _router: Router) { }

  ngOnInit() {

    //this.clientes = this._clientesService.getClientes().subscribe();
    this.getClientes();


    /*this._clientesService.getClientesPathVariable('chikitina').subscribe(
      response=>{console.log(response)},
      error=>{this.handleResponseError(error)});*/

  }


  handleResponseError(error) {
    console.log(error);
    console.log(error.error);
    console.log(error.message);



  }

  getClientes() {
    this._clientesService.getClientes().subscribe(
      response => {
        (console.log(response));
        this.clientes = response;
      },
      error => {
        console.log('Error al consultar clientes');
        this.flagProblemasTecnicos = true;
        this.message = 'Problemas tecnicos presentados. Por favor contacte a soporte tecnico.';

      }
    );


  }


  getCliente(idCliente: string) {
    console.log(idCliente);
    this._router.navigate(['cliente', idCliente]);

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

  updateCliente(idCliente: string) {
    console.log(`Actualizar cliente No. ${idCliente}`);
    this._router.navigate(['cliente', idCliente]);


  }

}
