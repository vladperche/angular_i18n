import { Injectable } from "@angular/core";
import { UsuarioService } from "./usuario.service";
import { Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    constructor(
        private usuarioService : UsuarioService,
        private router : Router
    ) {}

    canActivate() : 
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree
    {
        if(!this.usuarioService.logado){
            this.router.navigate(['/Login']);
            return false;
        }
        return true;
    }
}
