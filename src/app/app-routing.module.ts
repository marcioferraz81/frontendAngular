import { CadastrarClienteComponent } from './components/cliente/cadastrar-cliente/cadastrar-cliente.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarClienteComponent } from './components/cliente/atualizar-cliente/atualizar-cliente.component';
import { ListarClienteComponent } from './components/cliente/listar-cliente/listar-cliente.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clientes/atualizar/:id', component: AtualizarClienteComponent },
  { path: 'clientes/cadastrar', component: CadastrarClienteComponent },
  { path: 'clientes', component: ListarClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
