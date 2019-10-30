import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ClienteService } from "../../services/cliente.service";
import { Icliente } from 'src/app/interfaces/icliente';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  idCliente: string;
  formulario: FormGroup;
  cliente: Icliente;
  userMessage : string;
  flagOperacionExitosa = false;

  /*Accion deseada
  1 = adicionar cliente
  2 = consultar cliente
  3 = actualizar cliente
  */

  flagAccionCliente: number;


  constructor(private _activatedRoute: ActivatedRoute, private _clienteService: ClienteService) { }

  ngOnInit() {
    this.idCliente = this._activatedRoute.snapshot.params['idCliente'];
    this.formulario = new FormGroup({
      'idCliente': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'nombres': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'apellidos': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'direccion': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'municipio': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'departamento': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'telefono': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'email': new FormControl(),
      'sexo': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'edad': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'caracteristicas': new FormControl(),
      'fechaCreacion': new FormControl(),

    })



    if (this.idCliente == null) {
      //Adicionar Cliente
      console.log('Adicionar Cliente');
      this.flagAccionCliente = 1;
    }
    else {
      //Consultar Cliente
      console.log(`Consultar Cliente No. ${this.idCliente}`);
      this.flagAccionCliente = 2;
      this.getCliente(this.idCliente);
      this.formulario.controls.idCliente.disable();
      this.formulario.controls.nombres.disable();
      this.formulario.controls.apellidos.disable();
      this.formulario.controls.direccion.disable();
      this.formulario.controls.municipio.disable();
      this.formulario.controls.departamento.disable();
      this.formulario.controls.telefono.disable();
      this.formulario.controls.email.disable();
      this.formulario.controls.sexo.disable();
      this.formulario.controls.edad.disable();
      this.formulario.controls.caracteristicas.disable();

    }
  }

  getCliente(idCliente: string) {
    this._clienteService.getCliente(idCliente).subscribe(
      response => {
        console.log(response);
        this.cliente = response;
        this.formulario.setValue(this.cliente);

      },
      error => { }

    )

  }

  addCliente() {

  }

  updateCliente(idCliente: string) {
    console.log(`UpdateCliente No: ${this.formulario.controls.idCliente.value}`);
    this.flagAccionCliente = 3;
    this.formulario.controls.nombres.enable();
    this.formulario.controls.apellidos.enable();
    this.formulario.controls.direccion.enable();
    this.formulario.controls.municipio.enable();
    this.formulario.controls.departamento.enable();
    this.formulario.controls.telefono.enable();
    this.formulario.controls.email.enable();
    this.formulario.controls.sexo.enable();
    this.formulario.controls.edad.enable();
    this.formulario.controls.caracteristicas.enable();
  }

  submitForm() {
    console.log('submit');
    console.log(this.formulario);
    console.log(this.formulario.value);

    switch (this.flagAccionCliente) {
      case 1: {
        //Add Cliente
        console.log("AddCustomer");
        this.cliente = this.formulario.value;
        console.log('call service');
        this._clienteService.addCliente(this.cliente).subscribe(
          response=>{
            console.log('Cliente adicionado');
            this.flagOperacionExitosa==true;
            this.userMessage = 'Cliente adicionado exitosamente';
          },
          error=>{
            this.flagOperacionExitosa==false;
            this.userMessage = 'Error adicionando cliente. Intente de nuevo';
          }
        )

      }
      case 3: {
        //Update Cliente
        console.log('updateeee cliente');
       
        this.cliente = this.formulario.value;
        this.cliente.idCliente = this.formulario.controls.idCliente.value;
       
        this._clienteService.updateCliente(this.idCliente, this.cliente).subscribe(
          response => { 
            console.log(`responseee: ${response}`);
            this.userMessage = 'Cliente actualizado exitosamente';
            this.flagOperacionExitosa = true; 
            
         },
          error => {
            this.userMessage = 'Error actualizndo cliente. Intente de nuevo';
            this.flagOperacionExitosa = false; 
             

          }

        )



      }
    }


  }

}
