import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { DatePipe } from "@angular/common";

//Material
import { MaterialModule } from '../app/material/material.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { CitasComponent} from './components/citas/citas.component';


//Services
import { ClientesService } from "../app/services/clientes.service";
import { ClienteComponent } from './components/cliente/cliente.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReadClienteComponent } from './components/read-cliente/read-cliente.component';
import { CitaComponent } from './components/cita/cita.component';
import { EstadoCitaPipe } from './pipes/estado-cita.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClientesComponent,
    NavbarComponent,
    CitasComponent,
    ClienteComponent,
    ErrorComponent,
    FooterComponent,
    ReadClienteComponent,
    CitaComponent,
    EstadoCitaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    ClientesService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
