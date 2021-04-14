import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from './../../../services/clientes.service';
import { ICliente } from './../../../model/ICliente.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atualizar-cliente',
  templateUrl: './atualizar-cliente.component.html',
  styleUrls: ['./atualizar-cliente.component.css']
})
export class AtualizarClienteComponent implements OnInit {
  cliente: ICliente = {
    nome: null,
    nascimento: null,
    email: null
  };

  constructor(
    private clientesService: ClientesService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.clientesService.buscarPorId(id).subscribe(retorno => {
      this.cliente = retorno;
    });
  }

  salvarCliente(): void {
    this.clientesService.atualizar(this.cliente).subscribe(retorno => {
      this.cliente = retorno;
      this.clientesService.exibirMensagem(
        'SISTEMA',
        `${this.cliente.nome} foi atualizado com sucesso. ID: ${this.cliente.id}`,
        'toast-success'
      );
      this.router.navigate(['/clientes']);
    });
  }
}
