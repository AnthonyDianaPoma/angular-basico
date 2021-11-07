import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'The Flash', 'Lobezno', 'Razor', 'BBennett']
  mori2: string[] = [];

  borrarHeroe() {
    /* //.splice(index,index)
    this.heroes.splice(1, 2); */
    let morido = this.heroes.shift();

    if (morido != null) {
      this.mori2.push(morido);
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
