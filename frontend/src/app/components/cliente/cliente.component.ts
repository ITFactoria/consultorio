import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  idCliente : string;
  formulario : FormGroup;
  /*Accion deseada
  1 = adicionar cliente
  2 = actualizar cliente
  */

  flagAccionCliente : number;


  constructor( private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.idCliente = this._activatedRoute.snapshot.params['idCliente'];
    this.formulario = new FormGroup({
      'idCliente' : new FormControl('',[Validators.required, Validators.minLength(3)]),
      'nombres' : new FormControl('',[Validators.required, Validators.minLength(3)]),
      'apellidos' : new FormControl('',[Validators.required, Validators.minLength(3)]),
      'direccion' : new FormControl('',[Validators.required, Validators.minLength(10)]),
      'municipio' : new FormControl('',[Validators.required, Validators.minLength(3)]),
      'departamento' : new FormControl('',[Validators.required, Validators.minLength(3)]),
      'telefono' : new FormControl('',[Validators.required, Validators.minLength(6)]),
      'email' : new FormControl(),
      'sexo' : new FormControl('',[Validators.required, Validators.minLength(1)]),
      'edad' : new FormControl('',[Validators.required, Validators.minLength(1)]),
      'caracteristicas' : new FormControl(),
     
    })

    console.log('accion');
    console.log(this.idCliente);
    

    if (this.idCliente == null){
      //Adicionar Cliente
      console.log('Adicionar Cliente');
      this.flagAccionCliente = 1;
    }
    else{
      //Actualizar Cliente
      console.log('Actualizar Cliente');
      this.flagAccionCliente = 2;

      


    }

    
  }

  submitForm(){
    console.log(this.formulario);
    console.log(this.formulario.value);
    
  }

}
