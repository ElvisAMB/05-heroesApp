import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';

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
  heroeUrl: Heroe= {
     alter_ego:'',
     characters:'',
     first_appearance:'',
     publisher:Publisher.DCComics,
     superhero:'',
     alt_img:''
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      //switchMap({ id }) => console.log(id),
      tap(console.log)
    )
    .subscribe(pais => console.log('')); // Se llena la vista para mostrarla

  }

}


