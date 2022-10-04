import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizacaoComponent } from './components/quadrante/atualizacao/atualizacao.component';
import { CadastroComponent } from './components/quadrante/cadastro/cadastro.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, /* canActivate: [AuthGuard] */},
  {path: 'cadastro', component: CadastroComponent, /* canActivate: [AuthGuard] */},
  {path: 'atualizacao/:id', component: AtualizacaoComponent, /* canActivate: [AuthGuard] */},
  { path: '',   redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
