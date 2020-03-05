import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { ClienteService } from "../../services/cliente.service";
import { Icliente } from 'src/app/interfaces/icliente';
import swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
//import { Municipio } from 'src/app/clases/municipio';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  idCliente: string;
  formulario: FormGroup;
  target: string;

  cliente: Icliente;
  //municipio: Municipio;
  //municipios: Municipio[];

  userMessage: string;
  flagOperacionExitosa = false;
  errores: string[];

  /*Accion deseada
  1 = adicionar cliente
  2 = consultar cliente
  3 = actualizar cliente
  */

  flagAccionCliente: number;
  formularioSubmitted: boolean = false;


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _clienteService: ClienteService,
    private _router: Router,
    private _datePipe: DatePipe,
    private _fb: FormBuilder) { }

  ngOnInit() {
    
    
    console.log("cliente component init");
    
    //Source page
    this.target = this._activatedRoute.snapshot.params['id1'];
    console.log(this.target);

    
    if (this.target=="cita"){
      console.log("cliente llamado x cita");
      this.idCliente = this._activatedRoute.snapshot.params['id2'];
    }
    else{
      console.log("cliente llamado x cliente");
      this.idCliente = this._activatedRoute.snapshot.params['idCliente'];
    }

    console.log("cliente definitivo");
    console.log(this.idCliente);



    this.formulario = this._fb.group({
      idCliente: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[0-9]+$')]],
      nombres: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      direccion: ['', [Validators.required, Validators.minLength(3)]],
      //municipio: ['', [Validators.required, Validators.minLength(3)]],
      //departamento: [''],
      telefono: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[0-9]+$')]],
      //email: [''],
      //email: ['',Validators.pattern(('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'))],
      sexo: ['', [Validators.required, Validators.minLength(1)]],
      //fechaNacimiento: ['', [Validators.required, Validators.minLength(6)]],
      caracteristicas: [],
      fechaCreacion: [],
      citas: []
    })


    
    if (this.idCliente == null || this.target == "cita") {
      //Adicionar Cliente
      this.flagAccionCliente = 1;
      //this.getMunicipios();
      if (this.target == "cita") { this.formulario.controls.idCliente.setValue(this.idCliente); }
    }
    else {
      //Actualizar Cliente
      console.log(`Actualizar Clientesito No. ${this.idCliente}`);
      this.flagAccionCliente = 2;
      this.getCliente(this.idCliente);
      this.formulario.controls.idCliente.disable();
      //this.getMunicipios();


    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.formulario.controls[controlName].hasError(errorName);
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

  /*getMunicipios() {
    console.log("gerMunicipios");
    this._clienteService.getMunicipios().subscribe(
      response => {
        console.log(response);
        this.municipios = response;


      }
    )
  }*/

  /*compararMunicipios(o1: Municipio, o2: Municipio) {
    return o1 === null || o2 === null ? false : o1.id === o2.id;
  }*/



  /*updateCliente(idCliente: string) {
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
  }*/

  submitForm() {
    this.formularioSubmitted = true;
    switch (this.flagAccionCliente) {
      case 1: {
        //Add Cliente
        console.log("Cliente.AddCliente")
        this.cliente = this.formulario.value;
        this.cliente.fechaCreacion = this._datePipe.transform(new Date(), 'yyyy-mm-dd');
        this._clienteService.addCliente(this.cliente).subscribe(
          response => {
            this.flagOperacionExitosa == true;
            //this.userMessage = 'Cliente adicionado exitosamente';
            //this._router.navigate(['/clientes']);
            swal.fire('Crear cliente', `Cliente con CC ${this.cliente.idCliente} creado exitosamente`, 'success');
            this._router.navigate(['/cita', this.cliente.idCliente]);



          },
          error => {
            this.flagOperacionExitosa == false;
            this.userMessage = 'Error adicionando cliente. Intente de nuevo';
            this.errores = error.error.errors as string[];
            console.error(`Codigo del error generado desde el backend: ${error.status}`);
            console.error(error.error.errors);
            swal.fire('Crear cliente', `Error en datos ${this.errores}`, 'error');


          }
        );
        break;


      }
      case 2: {
        //Update Cliente
        console.log("Cliente.UpdCliente")
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
            swal.fire('Actualizar cliente', `${this.errores}`, 'error');

          }

        )
      }
        break;


    }


  }



}
