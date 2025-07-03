import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  // Rotas públicas de autenticação (renderizadas sem o layout principal)
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login.component').then(
            (c) => c.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./features/auth/register/register.component').then(
            (c) => c.RegisterComponent
          ),
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },

  // Rotas privadas (renderizadas dentro do layout principal e protegidas pelo AuthGuard)
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: 'plans',
        loadComponent: () =>
          import('./features/plans/plan-list/plan-list.component').then(
            (c) => c.PlanListComponent
          ),
      },
      {
        path: 'my-subscription',
        loadComponent: () =>
          import(
            './features/account/my-subscription/my-subscription.component'
          ).then((c) => c.MySubscriptionComponent),
      },
      // Adicione a rota de relatórios quando o componente estiver pronto
      // { path: 'reports', loadComponent: () => import('./features/reports/reports.component').then(c => c.ReportsComponent) },
      { path: '', redirectTo: 'plans', pathMatch: 'full' }, // Rota padrão após o login
    ],
  },

  // Redireciona qualquer outra rota não encontrada
  { path: '**', redirectTo: '' },
];
