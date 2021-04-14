import { Router } from '@angular/router';
import { ClientesService } from './../../../services/clientes.service';
import { ICliente } from './../../../model/ICliente.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {
  cliente: ICliente = {
    nome: null,
    nascimento: null,
    email: null
  };

  constructor(private clientesService: ClientesService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarCliente(): void {
    this.clientesService.cadastrar(this.cliente).subscribe(retorno => {
      this.cliente = retorno;
      this.clientesService.exibirMensagem(
        'SISTEMA',
        `${this.cliente.nome} foi cadastrado com sucesso. ID: ${this.cliente.id}`,
        'toast-success'
      );
      this.router.navigate(['/clientes']);
    });
  }
}
