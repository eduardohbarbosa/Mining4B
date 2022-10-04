import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './login/auth.service';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { QuadranteComponent } from './components/quadrante/quadrante.component';
import { HttpClientModule } from '@angular/common/http';
import { QuadranteService } from './components/quadrante/quadrante.service';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CadastroComponent } from './components/quadrante/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    QuadranteComponent,
    ClienteComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, QuadranteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
