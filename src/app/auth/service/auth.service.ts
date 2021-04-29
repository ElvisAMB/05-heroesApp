import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Usuario } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlBase: string = environment.baseUrlApiHeroe;
  
  constructor(private http: HttpClient) { }

  login(){
    return this.http.get<Usuario>(`${this.urlBase}/usuarios/1`);
  }

}
