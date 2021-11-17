import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html'
})
export class CadastroVeiculoComponent {
  public isLogado: boolean = false;


   constructor(private router: Router)
   {
   }

   ngOnInit(): void {

    if(!this.isLogado)
    {
      alert("ok");
      this.router.navigate(['/autenticacao/login'])
      
    }
    else
    {
      alert("não foi");
      this.router.navigate(['/navegacao/home'])
    }
  }


}
