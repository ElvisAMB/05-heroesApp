import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) { }

  logear(){
    
    this.authService.login()
    .subscribe(auth => {
      if (auth.id) {
        console.log(auth);
        this.router.navigate(['./heroes']);
      }
    });


  }

}
