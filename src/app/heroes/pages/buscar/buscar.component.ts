import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl:'./buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  listado: Heroe[] = [];
  termino: string = '';

  constructor(private serviceHeroe: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.serviceHeroe.getHeroes()
    .subscribe(heroes=> {
      this.listado = heroes;
      //console.log(this.listado);
    });

  }

}
