import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { CadastroVeiculoComponent } from './veiculo/cadastro-veiculo/cadastro-veiculo.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    {path:  'cadastro-veiculo', component: CadastroVeiculoComponent}
    /*
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    { path: 'produtos', component: ListaProdutoComponent },
    { path: 'produto-detalhe/:id', component: ListaProdutoComponent }
    */
];