import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ClienteService } from "../../services/cliente.service";
import { Icliente } from 'src/app/interfaces/icliente';
import swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
//import { Municipio } from 'src/app/clases/municipio';



@Component({
  selector: 'app-read-cliente',
  templateUrl: './read-cliente.component.html',
  styleUrls: ['./read-cliente.component.css']
})
export class ReadClienteComponent implements OnInit {
  idCliente: string;
  cliente: Icliente;
  formulario: FormGroup;
  //municipios: Municipio[];



  constructor(
    private _activatedRoute: ActivatedRoute, 
    private _clienteService: ClienteService, 
    private _router: Router, 
    private _fb: FormBuilder,) { }

  ngOnInit() {
    this.idCliente = this._activatedRoute.snapshot.params['idCliente'];
    this.getCliente(this.idCliente);
    //this.getMunicipios();
    this.formulario = this._fb.group({
      idCliente: ['', [Validators.required, Validators.minLength(3),Validators.pattern('^[0-9]+$')]],
      nombres: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      direccion: ['', [Validators.required, Validators.minLength(10)]],
      //municipio: ['', [Validators.required, Validators.minLength(3)]],
      //departamento: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.minLength(6),Validators.pattern('^[0-9]+$')]],
      //email: ['',Validators.pattern(('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'))],
      sexo: ['', [Validators.required, Validators.minLength(1)]],
      //fechaNacimiento: ['', [Validators.required, Validators.minLength(6)]],
      caracteristicas: [],
      fechaCreacion: [],
      citas:[]
    })
    

  }
  getCliente(idCliente: string) {
    this._clienteService.getCliente(idCliente).subscribe(
      response => {
        this.cliente = response;
        this.formulario.setValue(this.cliente);
        this.formulario.controls.idCliente.disable();
        this.formulario.controls.nombres.disable();
        this.formulario.controls.apellidos.disable();
        this.formulario.controls.direccion.disable();
        //this.formulario.controls.municipio.disable();
        //this.formulario.controls.departamento.disable();
        this.formulario.controls.telefono.disable();
        //this.formulario.controls.email.disable();
        this.formulario.controls.sexo.disable();
        //this.formulario.controls.fechaNacimiento.disable();
        this.formulario.controls.caracteristicas.disable();
      },
      error => { 
        console.log("Negron no existe")
      }
    )

  }

  updateCliente(idCliente: string) {
    console.log(`read-cliente Actualizar clienteXXX No. ${idCliente}`);
    this._router.navigate(['/cliente',this.idCliente]);

    //this._router.navigate(['cliente'],{queryParams:{id1:'upd-cliente', id2:idCliente}});  
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.formulario.controls[controlName].hasError(errorName);
  }

  /*getMunicipios(){
    console.log("readCliente_ getMunicipios");
    this._clienteService.getMunicipios().subscribe(
      response =>{
        console.log(response);
        this.municipios = response;
        

      }
    )
  }*/

  /*compararMunicipios(o1: Municipio, o2: Municipio){
    return o1 === null || o2===null? false : o1.id ===o2.id;
  }*/



}
