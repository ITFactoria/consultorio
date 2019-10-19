import { Component, OnInit } from '@angular/core';
import { Icliente } from "../../interfaces/icliente";
import { ClientesService } from "../../services/clientes.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes : Icliente[];
  flagClienteNuevo : boolean = false;

  constructor( private _clientesService: ClientesService, private _router: Router) { }

  ngOnInit() {

    //this.clientes = this._clientesService.getClientes().subscribe();
    this._clientesService.getClientes().subscribe(
      response =>{
        (console.log(response));
        this.clientes = response;
      }
    );
    
    /*this._clientesService.getClientesPathVariable('chikitina').subscribe(
      response=>{console.log(response)},
      error=>{this.handleResponseError(error)});*/

  }


  handleResponseError(error){
    console.log(error);
    console.log(error.error);
    console.log(error.message);
    


  }

  consultarCliente(idCliente: string){
    console.log(idCliente);
    this._router.navigate(['cliente',idCliente]);

  }

  adicionarCliente(){
    console.log('adicionar cliente');
    this.flagClienteNuevo = true;

    this._router.navigate(['cliente']);
  }

}
