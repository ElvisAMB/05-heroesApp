import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute,private serviceHeroe: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap(({ id }) => this.serviceHeroe.getHeroe(id)))
    .subscribe(heroe => { this.heroe  = heroe; });
  }
}
