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


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CadastroVeiculoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
