import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/model/globals';
import { Cadastro } from 'src/app/model/cadastro';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  providers: [ Globals]
})
export class ContatoComponent implements OnInit {

  constructor(private router : Router) { }
  
  cadastro : Cadastro;

  ngOnInit() {
    if (Globals.CADASTRO == undefined) {
      this.router.navigate(['login']);
    } 
    else {
      this.cadastro = Globals.CADASTRO;
    }
  }

}
