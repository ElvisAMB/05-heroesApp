import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/service/auth.service';
import { Usuario } from '../../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  .container{
    margin: 10px;
  }
  `
  ]
})
export class HomeComponent  {

  constructor(private router: Router,
              private authService: AuthService) { }
  
  get auth():Usuario{
    return this.authService.auth;
  }

  logOut(){
    this.router.navigate(['./auth']);
  }
}
