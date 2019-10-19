import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : String ;
  password : String ;
  mensajeValidacion : String = 'hola';
  validacionCorrecta: boolean = true;
    

  constructor(private router : Router) { }

  ngOnInit() {
  }

  procesarData(){
    console.log(this.username, this.password);
    if(this.username==='eli' && this.password==='consulta'){
      this.validacionCorrecta=true;
      //this.router.navigate(['home',this.username]);
      this.router.navigate(['clientes']);
    
    }
    else{
      this.validacionCorrecta = false;
      this.mensajeValidacion = "datos incorrectos";
      console.log('bad')
    }

  }

}
