import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule }   from '@angular/forms';



import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { CadastroVeiculoComponent } from './veiculo/cadastro-veiculo/cadastro-veiculo.component';
import { rootRouterConfig } from './app.routes';
import { ListaVeiculoComponent } from './veiculo/lista-veiculo/lista-veiculo.component';
import { LoginComponent } from './autenticacao/login/login.component';
import { DadosPessoaisComponent } from './cliente/dados-pessoais/dados-pessoais.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CadastroVeiculoComponent,
    ListaVeiculoComponent,
    LoginComponent,
    DadosPessoaisComponent,
    CadastroClienteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
