import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { ProspectComponent } from './components/prospect/prospect.component';
import { CadastroComponent } from './components/prospect/cadastro/cadastro.component';
import { AtualizarComponent } from './components/prospect/atualizar/atualizar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuadranteComponent } from './components/prospect/quadrante/quadrante.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './services/auth.service';
import { ProspectService } from './services/prospect.service';
import { ListaProspectComponent } from './components/prospect/lista-prospect/lista-prospect.component';
import { CnpjPipe } from './pipes/cnpj.pipe';
import { CnaePipe } from './pipes/cnae.pipe';
import { CepPipe } from './pipes/cep.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    ProspectComponent,
    CadastroComponent,
    AtualizarComponent,
    QuadranteComponent,
    ListaProspectComponent,
    CnpjPipe,
    CnaePipe,
    CepPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, AuthService, ProspectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
