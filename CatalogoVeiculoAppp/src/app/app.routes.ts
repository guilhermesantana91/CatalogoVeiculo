import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { CadastroVeiculoComponent } from './veiculo/cadastro-veiculo/cadastro-veiculo.component';
import { ListaVeiculoComponent } from './veiculo/lista-veiculo/lista-veiculo.component';
import { LoginComponent } from './autenticacao/login/login.component';
import { DadosPessoaisComponent } from './cliente/dados-pessoais/dados-pessoais.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { CadastroMarcaComponent } from './marca/cadastro-marca/cadastro-marca.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/autenticacao/login', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path:  'veiculo/cadastro-veiculo', component: CadastroVeiculoComponent},
    { path:  'veiculo/lista-veiculo', component: ListaVeiculoComponent},
    { path: 'veiculo/cadastro-veiculo', component: CadastroVeiculoComponent},
    { path: 'autenticacao/login', component: LoginComponent},
    { path: 'cliente/dados-pessoais', component: DadosPessoaisComponent},
    { path: 'cliente/cadastro-cliente', component: CadastroClienteComponent},
    { path: 'marca/cadastro-marca', component: CadastroMarcaComponent}
    /*
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    { path: 'produtos', component: ListaProdutoComponent },
    { path: 'produto-detalhe/:id', component: ListaProdutoComponent }
    */
];