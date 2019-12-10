import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { ClientesComponent } from "./components/clientes/clientes.component"
import { ConsultasComponent } from "./components/consultas/consultas.component";
import { ClienteComponent } from "../app/components/cliente/cliente.component";
import { ReadClienteComponent } from "../app/components/read-cliente/read-cliente.component";
import { ErrorComponent } from "../app/components/error/error.component";



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'consultas', component: ConsultasComponent },
  { path: 'home/:username', component: HomeComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'read-cliente/:idCliente', component: ReadClienteComponent },
  { path: 'cliente/:idCliente', component: ClienteComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: '*', component: HomeComponent },
  { path: '**', component: HomeComponent },
  
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
