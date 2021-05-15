import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/internal/operators/tap';
import { environment } from '../../../environments/environment';
import { Usuario } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlBase: string = environment.baseUrlApiHeroe;
  private _usuario: Usuario | undefined;

  get auth(): Usuario{
    return { ...this._usuario! };
  }

  constructor(private http: HttpClient) { }

  login(){
    return this.http.get<Usuario>(`${this.urlBase}/usuarios/1`)
    .pipe(
      tap(resp => this._usuario = resp)
    );
  }

}
