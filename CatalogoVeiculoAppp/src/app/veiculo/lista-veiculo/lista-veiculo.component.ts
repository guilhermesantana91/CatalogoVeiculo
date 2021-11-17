import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-lista-veiculo',
  templateUrl: './lista-veiculo.component.html'
})
export class ListaVeiculoComponent implements OnInit {
/*
  Exemplo de redirecionamento de rota
*/
public nomeUsuario: string;

  constructor(
    private router: Router,
    private cookieService: CookieService
    
  ) 
  { 
    this.nomeUsuario = cookieService.get('vchCodUsuario');

  }

  ngOnInit(): void {
  // this.router.navigate(['/autenticacao/login'])
  }

}
