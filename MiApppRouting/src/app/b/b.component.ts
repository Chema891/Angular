import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/Pedido';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  pedidos:Pedido[] = null;

  constructor() { }

  ngOnInit() {
    this.pedidos=[
      new Pedido(1,'Jamon',1),
      new Pedido(2,'Gambas',100),
      new Pedido(3,'Wisky',2),
      new Pedido(4,'Vino',10)
    ];
  }

}
