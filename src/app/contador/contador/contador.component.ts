import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  titulo: string = 'Contador App';
  num: number = 10;
  base: number = 5

  acumular(valor: number) {
    this.num += valor;
  }

  /* sumar() {
    this.num += 1;
  }

  restar () {
    this.num -= 1;
  } */

  constructor() { }

  ngOnInit(): void {
  }

}
