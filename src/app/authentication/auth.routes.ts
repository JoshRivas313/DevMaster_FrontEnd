// 📌 src/app/authentication/auth.routes.ts
import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then(
        m => m.LoginComponent
      ),
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then(
        m => m.RegisterComponent
      ),
  },



  // redirect si solo pone /auth
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
