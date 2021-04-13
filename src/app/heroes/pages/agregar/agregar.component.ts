import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  //Objeto para el selector
  publishers = [
    {
      id: 'DC Comics',
      description: 'DC-Comics'
    },
    {
      id: 'Marvel Comics',
      description: 'Marvel-Comics'
    }
  ]
  
  //Objeto para la imagen
  heroeAgregar: Heroe= {
     alter_ego:'',
     characters:'',
     first_appearance:'',
     publisher:Publisher.Desconocido,
     superhero:'',
     alt_img:''
  }

  constructor(private serviceHeroe: HeroesService) { }

  ngOnInit(): void {
    

  }
  
  addHeroe(){
    if (this.heroeAgregar.superhero.trim().length === 0) {
      return;  
    } 

    this.serviceHeroe.setHeroe(this.heroeAgregar)
    .subscribe(resp => console.log(resp));
    //console.log(this.heroeAgregar);
  }
}


