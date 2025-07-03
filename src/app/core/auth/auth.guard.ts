import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service'; // Certifique-se que este caminho está correto

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Verifica se o usuário tem um token de autenticação válido
  if (authService.isLoggedIn()) {
    return true; // Permite o acesso à rota
  }

  // Se não estiver logado, redireciona para a página de login
  return router.parseUrl('/auth/login');
};
