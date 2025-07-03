import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { HomeComponent } from './features/home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
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
      {
        path: 'reports',
        loadComponent: () =>
          import('./features/reports/reports-list/reports-list.component').then(
            (c) => c.ReportsListComponent
          ),
      },
      { path: '', redirectTo: 'plans', pathMatch: 'full' }, // Rota padrão após o login
    ],
  },

  // Redireciona qualquer outra rota não encontrada
  { path: '**', redirectTo: '' },
];
