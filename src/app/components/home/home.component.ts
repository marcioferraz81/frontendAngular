import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nome: string = 'Marcio Ferraz';
  anuncio: string = `atividade final de ${this.nome}!`;
  id: number = 3;
  email: string = "marcio.ferraz@etec.sp.gov.br";
  foto: string = 'assets/img/crud.png';
  nascimento = '1981-10-11';
/*
  listaProdutos: any[] = [
    { nome: 'Curso Lógica de Programação', preco: 300.50, validade: '2021-12-31', id: 1, promocao: true },
    { nome: 'Curso Ionic', preco: 200.50, validade: '2021-12-31', id: 2, promocao: true },
    { nome: 'Curso Bootstrap', preco: 100, validade: '2021-12-31', id: 3, promocao: false },
    { nome: 'Curso PHP', preco: 280.50, validade: '2021-12-31', id: 4, promocao: true },
    { nome: 'Curso MySQL', preco: 80.80, validade: '2021-12-31', id: 5, promocao: false }
  ];
*/
  constructor() {
    //variáveis string com cocatenação
    //this.anuncio = 'O ' + this.nomeProduto + ' está em promoção';
/*
    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anúncio: ', this.anuncio);
    console.log('ID Produto: ', this.idProduto);
    console.log('Preço do Produto: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);
    */
  }

  ngOnInit(): void {
  }

}
