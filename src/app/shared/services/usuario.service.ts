import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario, IUsuarioLogin } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private router: Router
  ) {}

  login(login: IUsuarioLogin) : boolean {
    if(login.password.length != 0) {
      let usuario : IUsuario = {
        username: login.username,
        displayName: login.username,
        email: login.username + '@email.com'
      };
      localStorage.setItem('usuario', btoa(JSON.stringify(usuario)));
      localStorage.setItem('token', btoa(Math.random().toString()));
      this.router.navigate(['']);
      return true;
    } else {
      return false;
    }
  }

  logout() : any {
    localStorage.clear();
    this.router.navigate(['Login']);
  }

  get UsuarioLogado() : IUsuario {
    return localStorage.getItem('usuario')
      ? JSON.parse(atob(localStorage.getItem('usuario') ?? ''))
      : null;
  }

  get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
