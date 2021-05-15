import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Usuario } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  private usuario:Usuario | undefined;

  constructor(private router: Router, 
              private authService: AuthService) { }
  
  logear(){
    
    //Ir al backend (pantalla listado)
    this.authService.login()
    .subscribe(auth => {
      if (auth.id) {
        this.usuario = auth;
        console.log('Login',this.usuario);
        this.router.navigate(['./heroes']);
      }
    });


  }

}
