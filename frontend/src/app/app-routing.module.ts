import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { ClientesComponent } from "./components/clientes/clientes.component"
import { CitasComponent } from "../app/components/citas/citas.component";
import { ClienteComponent } from "../app/components/cliente/cliente.component";
import { ReadClienteComponent } from "../app/components/read-cliente/read-cliente.component";
import { ErrorComponent } from "../app/components/error/error.component";
import { CitaComponent } from "../app/components/cita/cita.component";



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cita', component: CitaComponent },
  { path: 'cita/:idCliente', component: CitaComponent },
  { path: 'citas', component: CitasComponent },
  { path: 'home/:username', component: HomeComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'read-cliente/:idCliente', component: ReadClienteComponent },
  { path: 'cliente', component: ClienteComponent },
  
  { path: 'cliente/:idCliente', component: ClienteComponent },
  //{ path: 'cliente/:id1/:id2', component: ClienteComponent },
  
  { path: '*', component: HomeComponent },
  { path: '**', component: HomeComponent },
  
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
