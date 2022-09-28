import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(user:User){
    if(user.nome === "user@email.com" && user.senha === "123456"){
      this.userAutenticado = true;

      this.router.navigate(['/home'])
    }else{
      this.userAutenticado = false;
    }
  }

  usuarioEstaAutenticado(){
    return this.userAutenticado;
  }
}
