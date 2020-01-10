import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ClienteService } from "../../services/cliente.service";
import { Icliente } from 'src/app/interfaces/icliente';
import swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";



@Component({
  selector: 'app-read-cliente',
  templateUrl: './read-cliente.component.html',
  styleUrls: ['./read-cliente.component.css']
})
export class ReadClienteComponent implements OnInit {
  idCliente: string;
  cliente: Icliente;
  formulario: FormGroup;



  constructor(
    private _activatedRoute: ActivatedRoute, 
    private _clienteService: ClienteService, 
    private _router: Router, 
    private _fb: FormBuilder) { }

  ngOnInit() {
    this.idCliente = this._activatedRoute.snapshot.params['idCliente'];
    this.getCliente(this.idCliente);
    this.formulario = this._fb.group({
      idCliente: ['', [Validators.required, Validators.minLength(3),Validators.pattern('^[0-9]+$')]],
      nombres: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      direccion: ['', [Validators.required, Validators.minLength(10)]],
      municipio: ['', [Validators.required, Validators.minLength(3)]],
      departamento: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.minLength(6),Validators.pattern('^[0-9]+$')]],
      email: ['',Validators.pattern(('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'))],
      sexo: ['', [Validators.required, Validators.minLength(1)]],
      fechaNacimiento: ['', [Validators.required, Validators.minLength(6)]],
      caracteristicas: [],
      fechaCreacion: [],
    })
    
    
    /*this.formulario = new FormGroup({
      'idCliente': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'nombres': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'apellidos': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'direccion': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'municipio': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'departamento': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'telefono': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'email': new FormControl(),
      'sexo': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'fechaNacimiento': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'caracteristicas': new FormControl(),
      'fechaCreacion': new FormControl(),

    })*/



  }
  getCliente(idCliente: string) {
    this._clienteService.getCliente(idCliente).subscribe(
      response => {
        console.log("getcliente")
        console.log(response);
        this.cliente = response;
        console.log("fechaNacimiento");
        console.log(this.cliente.fechaNacimiento);
        this.formulario.setValue(this.cliente);
        this.formulario.controls.idCliente.disable();
        this.formulario.controls.nombres.disable();
        this.formulario.controls.apellidos.disable();
        this.formulario.controls.direccion.disable();
        this.formulario.controls.municipio.disable();
        this.formulario.controls.departamento.disable();
        this.formulario.controls.telefono.disable();
        this.formulario.controls.email.disable();
        this.formulario.controls.sexo.disable();
        this.formulario.controls.fechaNacimiento.disable();
        this.formulario.controls.caracteristicas.disable();



      },
      error => { }

    )

  }

  updateCliente(idCliente: string) {
    console.log(`Actualizar cliente No. ${idCliente}`);
    this._router.navigate(['cliente', idCliente]);
  }



}
