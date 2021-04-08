import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private urlApiHeroe: string = environment.baseUrlApiHeroe;

  constructor(private http: HttpClient) { }


  getHeroes():Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.urlApiHeroe}/heroes`);
  }

  getHeroe(id: string):Observable<Heroe>{
    return this.http.get<Heroe>(`${this.urlApiHeroe}/heroes/${id}`);
  }
}
