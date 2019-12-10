import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ClienteService } from "../../services/cliente.service";
import { Icliente } from 'src/app/interfaces/icliente';
import swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

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
  errores : string[];

  /*Accion deseada
  1 = adicionar cliente
  2 = consultar cliente
  3 = actualizar cliente
  */

  flagAccionCliente: number;


  constructor(private _activatedRoute: ActivatedRoute, private _clienteService: ClienteService, private _router: Router, private _datePipe: DatePipe) { }

  ngOnInit() {
    this.idCliente = this._activatedRoute.snapshot.params['idCliente'];
    this.formulario = new FormGroup({
      'idCliente': new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern('^[0-9]+$')]),
      'nombres': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'apellidos': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'direccion': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'municipio': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'departamento': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'telefono': new FormControl('', [Validators.required, Validators.minLength(6),Validators.pattern('^[0-9]+$')]),
      'email': new FormControl('',Validators.pattern(('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'))),
      'sexo': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'fechaNacimiento': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'caracteristicas': new FormControl(),
      'fechaCreacion': new FormControl(),

    })



    if (this.idCliente == null) {
      //Adicionar Cliente
      console.log('Adicionar Cliente');
      this.flagAccionCliente = 1;
      console.log(this.flagAccionCliente);
    }
    else {
      //Actualizar Cliente
      console.log(`Actualizar Cliente No. ${this.idCliente}`);
      this.flagAccionCliente = 2;
      this.getCliente(this.idCliente);
      
      /*this.formulario.controls.idCliente.disable();
      this.formulario.controls.nombres.disable();
      this.formulario.controls.apellidos.disable();
      this.formulario.controls.direccion.disable();
      this.formulario.controls.municipio.disable();
      this.formulario.controls.departamento.disable();
      this.formulario.controls.telefono.disable();
      this.formulario.controls.email.disable();
      this.formulario.controls.sexo.disable();
      this.formulario.controls.fechaNacimiento.disable();
      this.formulario.controls.caracteristicas.disable();*/

    }
  }

  public hasError = (controlName: string, errorName: string) => {
     return this.formulario.controls[controlName].hasError(errorName);
   }

 
  getCliente(idCliente: string) {
    this._clienteService.getCliente(idCliente).subscribe(
      response => {
        this.cliente = response;
        this.formulario.setValue(this.cliente);
       
      },
      error => { }

    )

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
    this.formulario.controls.fechaNacimiento.enable();
    this.formulario.controls.caracteristicas.enable();
  }

  submitForm() {
    switch (this.flagAccionCliente) {
      case 1: {
        //Add Cliente
        
        
        this.cliente = this.formulario.value;
        this.cliente.fechaCreacion = this._datePipe.transform(new Date(),'yyyy-mm-dd');

        
        //this.cliente.fechaCreacion = new Date().toString();
        
        this._clienteService.addCliente(this.cliente).subscribe(
          response=>{
            this.flagOperacionExitosa==true;
            //this.userMessage = 'Cliente adicionado exitosamente';
            this._router.navigate(['/clientes']);
            swal.fire('Crear cliente',`Cliente con CC ${this.cliente.idCliente} creado exitosamente`,'success');

            
          },
          error=>{
            this.flagOperacionExitosa==false;
            this.userMessage = 'Error adicionando cliente. Intente de nuevo';
            this.errores = error.error.errors as string[];
            console.error(`Codigo del error generado desde el backend: ${error.status}`);
            console.error(error.error.errors);
            swal.fire('Adicionar cliente', `Error en datos ${this.errores}`, 'error');
            

          }
        );
        break;


      }
      case 2: {
        //Update Cliente
       
        this.cliente = this.formulario.value;
        this.cliente.idCliente = this.formulario.controls.idCliente.value;
       
        this._clienteService.updateCliente(this.idCliente, this.cliente).subscribe(
          response => { 
            //this.userMessage = 'Cliente actualizado exitosamente';
            this.flagOperacionExitosa = true; 
            this._router.navigate(['/clientes']);
            swal.fire('Actualizar cliente', `Cliente con CC ${this.cliente.idCliente} actualizado exitosamente`);
            
         },
          error => {
            this.userMessage = 'Error actualizndo cliente. Intente de nuevo';
            this.flagOperacionExitosa = false;
            this.errores = error.error.errors as string[];
            console.error(`Codigo de error generado desde el backend: ${error.status}`);
            console.error(error.error.errors);
            swal.fire('Actualizar cliente', `${this.errores}`,'error');
            
          }

        )
      }
      break;


    }


  }

}
