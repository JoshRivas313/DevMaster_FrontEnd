import { Routes } from '@angular/router';

export const routes: Routes = [

    {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/auth.routes').then(
        m => m.AUTH_ROUTES
      ),
  },

  // página 404 (opcional)
  {
    path: '**',
    redirectTo: 'auth/login',
  },

];
