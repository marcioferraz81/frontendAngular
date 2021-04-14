import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-cliente',
  templateUrl: './card-cliente.component.html',
  styleUrls: ['./card-cliente.component.css']
})
export class CardClienteComponent implements OnInit {

  @Input() foto: string;
  @Input() nome: string;
  @Input() nascimento: string;
  @Input() id: number;
  @Input() email: string;

  constructor() { }

  ngOnInit(): void {
  }

}
