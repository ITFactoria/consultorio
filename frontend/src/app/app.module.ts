import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { ConsultasComponent } from './components/consultas/consultas.component';


//Services
import { ClientesService } from "../app/services/clientes.service";
import { ClienteComponent } from './components/cliente/cliente.component';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClientesComponent,
    NavbarComponent,
    ConsultasComponent,
    ClienteComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
