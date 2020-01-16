import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  formulario: FormGroup;

  constructor(private _fb: FormBuilder, private _clienteService: ClienteService) { }

  ngOnInit() {
    this.formulario = this._fb.group({
      idCliente: ['', [Validators.required, Validators.minLength(3),Validators.pattern('^[0-9]+$')]],
      
    })
    

  }

  public hasError = (controlName: string, errorName: string) => {
    return this.formulario.controls[controlName].hasError(errorName);
  }

  public getCliente(idCliente: string){
    console.log("getCliente");
    idCliente = this.formulario.controls.idCliente.value;
    
    this._clienteService.getCliente(idCliente).subscribe(response=>{
      console.log(response);
    })

    

  }


}
