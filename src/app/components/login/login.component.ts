import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : Usuario = new Usuario();

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  fazerLogin(){
    console.log(this.user);
    this.authService.fazerLogin(this.user);
  }

}
