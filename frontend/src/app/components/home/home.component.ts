import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from "@angular/material/datepicker";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

username: String;

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.username = this._activatedRoute.snapshot.params['username'];
    console.log('name' +this.username)
    

  }

  consultarPacientes(){
    this._router.navigate(['clientes']);

  }

  consultarConsultas(){
    this._router.navigate(['consultas']);

  }


}
