import { inject } from "@angular/core";
import { CanActivateFn, Router, UrlTree } from "@angular/router";

export const authGuard: CanActivateFn = async (rota, estado): Promise <boolean | UrlTree> => {
    // Lógica para verificar se o usuário está autenticado
    const roteador = inject(Router);
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
        alert("Acesso negado. Por favor faca login");
        localStorage.removeItem('access_token');
        localStorage.removeItem('code_verifier');
        return roteador.createUrlTree(['login']);
    }
    return true;
}