import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    img {
      width:100%;
      border-radius:5px;
    }
    `
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

  constructor(private serviceHeroe: HeroesService, private activatedRoute:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //console.log(this.router.url.includes('editar'));
    
    if (!this.router.url.includes('editar')) {
      return;
    }
    else{
      this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.serviceHeroe.getHeroe(id))
      )
      .subscribe(heroe => this.heroeAgregar = heroe);
    }
  }
  
  addHeroe(){
    if (this.heroeAgregar.superhero.trim().length === 0) {
      return;  
    } 

    if (this.heroeAgregar.id) {
      //Actualizar heroe
      //console.log('Actualizar heroe');
      this.serviceHeroe.setUpdateHeroe(this.heroeAgregar)
      .subscribe(resp => this.heroeAgregar = resp);
    }
    else{
      //Crear heroe
      //console.log('Crear heroe');
      this.serviceHeroe.setHeroe(this.heroeAgregar)
      .subscribe(resp => this.heroeAgregar = resp);
      this.router.navigate(['/heroes',this.heroeAgregar.id]);
    }  
  }
}


