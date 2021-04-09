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
  heroeObtenido: Heroe | undefined;

  constructor(private serviceHeroe: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.serviceHeroe.getHeroeSugerencia(this.termino.trim())
    .subscribe(items=> this.listado = items); //Mostra sugerencias de búsqueda
  }

  sugerenciaObtenida( event: MatAutocompleteSelectedEvent)
  {
    if (!event.option.value) {   //Valida que no tiene valor cadena vacía
      this.heroeObtenido = undefined;
      return;  
    }

    const seleccion:Heroe = event.option.value;
    this.termino = seleccion.superhero;
    console.log(seleccion);
    this.serviceHeroe.getHeroe(seleccion.id!)
                     .subscribe(item => this.heroeObtenido = item);  //Mostrar heroe seleccionado
    console.warn(this.heroeObtenido);
  }
}
