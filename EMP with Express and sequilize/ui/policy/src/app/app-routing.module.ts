import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PolicyComponent } from './policy/policy.component';

const routes: Routes = [
  {
    path: 'signup', component: AuthComponent,
    children: [{ path: '', component: RegisterComponent }]
  },
  {
    path: 'login', component: AuthComponent,
    children: [{ path: '', component: LoginComponent }]
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'policies', component:PolicyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
