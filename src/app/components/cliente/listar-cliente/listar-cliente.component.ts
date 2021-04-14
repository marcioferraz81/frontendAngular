import { ClientesService } from '../../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/model/ICliente.module';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  listaClientes: ICliente[] = [];

  constructor(private clientesService: ClientesService) {

  }

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.clientesService.buscarTodos().subscribe(retorno => {
      this.listaClientes = retorno;
    });
  }

  deletar(cliente: ICliente): void {
    this.clientesService.excluir(cliente.id).subscribe(() =>{
      this.clientesService.exibirMensagem(
        'SISTEMA',
        `${cliente.nome} foi excluído com sucesso.`,
        'toast-error'
      );
      this.carregarClientes();
    });
  }


}
