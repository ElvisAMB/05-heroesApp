import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
  termino: string = '';  //NgModel vista
  heroeObtenido!: Heroe;

  constructor(private serviceHeroe: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.serviceHeroe.getHeroeSugerencia(this.termino)
    .subscribe(items=>  this.listado = items); //Mostra sugerencias de búsqueda
  }

  sugerenciaObtenida( event: MatAutocompleteSelectedEvent)
  {
    const seleccion:Heroe = event.option.value;
    this.termino = seleccion.superhero;
 
    this.serviceHeroe.getHeroe(seleccion.id!)
                     .subscribe(item => this.heroeObtenido = item);  //Mostra heroe seleccionado
  }
}
