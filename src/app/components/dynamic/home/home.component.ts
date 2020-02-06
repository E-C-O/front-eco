import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/model/globals';
import { Cadastro } from 'src/app/model/cadastro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Globals]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  cadastro: Cadastro;
  
  ngOnInit() {
    if (Globals.CADASTRO == undefined) {
      // this.router.navigate(['login']);
    } 
    else {
      this.cadastro = Globals.CADASTRO;
    }
  }

}
