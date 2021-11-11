import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent{
  public cookieValue: string;

  constructor(private cookieService: CookieService){
    this.cookieValue = cookieService.get('vchCodUsuario')
  }

  ngOnInit(): void {
    this.cookieService.set('vchCodUsuario','jsantana@gruporecovery.com')
    this.cookieValue = this.cookieService.get('vchCodUsuario');
  }

}
