import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/clases/cliente';
import { Router, ActivatedRoute } from "@angular/router";
//import { Municipio } from 'src/app/clases/municipio';
import { CitasService } from 'src/app/services/citas.service';
import { Cita } from 'src/app/clases/cita';
import Swal from "sweetalert2";
import { DatePipe } from '@angular/common';
//import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, } from "@angular/material-moment-adapter";
//import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css'],
  
})
export class CitaComponent implements OnInit {

  cliente: Cliente;
  cita: Cita;
  formConsultaIdCliente: FormGroup;
  formCliente: FormGroup;
  formCita: FormGroup;
  errores : string[];
  idClienteNuevo : string;
  idCliente : string;

  //municipio: Municipio;
  //municipios: Municipio[];

  flagClienteExiste: boolean = false;



  constructor(private _fb: FormBuilder, private _clienteService: ClienteService,
              private _router: Router, private _citasService: CitasService,
              private _datePipe: DatePipe, private _activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.formConsultaIdCliente = this._fb.group({
      idCliente: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[0-9]+$')]],

    })

    
    this.formCliente = this._fb.group({
      idCliente: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[0-9]+$')]],
      nombres: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      direccion: ['', [Validators.required, Validators.minLength(10)]],
      //municipio: ['', [Validators.required, Validators.minLength(3)]],
      //departamento: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[0-9]+$')]],
      //email: ['', Validators.pattern(('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'))],
      sexo: ['', [Validators.required, Validators.minLength(1)]],
      //fechaNacimiento: ['', [Validators.required, Validators.minLength(6)]],
      caracteristicas: [],
      fechaCreacion: [],
      citas: [],

    })

    
    this.formCita = this._fb.group({
      //idCita: ['', [Validators.required, Validators.minLength(3),Validators.pattern('^[0-9]+$')]],
      fechaAsignacion: ['', [Validators.required, Validators.minLength(6)]],
      estadoCita: ['false'],
    })

    this.idClienteNuevo = this._activatedRoute.snapshot.params['idCliente'];
    
    
    if(this.idClienteNuevo!=null){
      this.flagClienteExiste = true;
      this.formConsultaIdCliente.controls.idCliente.setValue(this.idClienteNuevo) ;

      this.formCliente.controls.idCliente.setValue(this.idClienteNuevo) ;
      this.getCitaContent(this.idClienteNuevo);
    }

  }

  public hasError = (controlName: string, errorName: string) => {
    return this.formConsultaIdCliente.controls[controlName].hasError(errorName);
  }

  public hasErrorFormCita = (controlName: string, errorName: string) => {
    return this.formCita.controls[controlName].hasError(errorName);
  }


  public getCitaContent(idCliente: string) {
    this.getCliente(idCliente);
    //this.getMunicipios();
  }

  public getCliente(idCliente: string) {
    console.log("Cita getCliente");
    idCliente = this.formConsultaIdCliente.controls.idCliente.value;
    this.idCliente = idCliente;

    this._clienteService.getCliente(idCliente).subscribe(
      response => {
        console.log(response);
        this.cliente = response;
        this.formCliente.setValue(this.cliente);
        this.formCliente.controls.idCliente.disable();
        this.formCliente.controls.nombres.disable();
        this.formCliente.controls.apellidos.disable();
        this.formCliente.controls.direccion.disable();
        //this.formCliente.controls.municipio.disable();
        //this.formCliente.controls.departamento.disable();
        this.formCliente.controls.telefono.disable();
        //this.formCliente.controls.email.disable();
        this.formCliente.controls.sexo.disable();
        //this.formCliente.controls.fechaNacimiento.disable();
        this.formCliente.controls.caracteristicas.disable();
        this.flagClienteExiste = true;
      },
      error => {
        console.log("El negro no existe");
        //this._router.navigate(['cliente',this.idCliente]);
        //this._router.navigate(['cliente']);
        this._router.navigate(['cliente',{id1: "cita", id2: this.idCliente }]);
      }
    );
  }

  /*getMunicipios() {
    console.log("cita_ getMunicipios");
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

  addCita() {
    this.cita = this.formCita.value;
    this.cita.cliente = this.cliente;
    this._datePipe.transform(this.cita.fechaAsignacion,'yyyy-mm-dd');
    this._citasService.addCita(this.cita).subscribe(
      response => {
        console.log(response);
        Swal.fire('Asignar Cita', `Cita asignada exitisamente al cliente con CC ${this.cliente.idCliente} `, 'success');
        this._router.navigate(['citas']);
      },
      error => {
        console.error(`Codigo del error generado desde el backend: ${error.status}`);
        console.error(error.error.errors);
        Swal.fire('Asignar Cita', `Error en datos ${this.errores}`, 'error');
      }
    );

  }



}
