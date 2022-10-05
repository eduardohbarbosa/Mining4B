import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AtualizarComponent } from './components/prospect/atualizar/atualizar.component';
import { CadastroComponent } from './components/prospect/cadastro/cadastro.component';
import { ProspectComponent } from './components/prospect/prospect.component';
import { QuadranteComponent } from './components/prospect/quadrante/quadrante.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: ProspectComponent, /* canActivate: [AuthGuard] */},
  {path: 'cadastro', component: CadastroComponent, /* canActivate: [AuthGuard] */},
  {path: 'atualizacao/:id', component: AtualizarComponent, /* canActivate: [AuthGuard] */},
  { path: '',   redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
