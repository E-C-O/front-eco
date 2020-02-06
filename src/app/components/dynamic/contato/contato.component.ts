import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/model/globals';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  providers: [ Globals]
})
export class ContatoComponent implements OnInit {

  constructor(private router : Router) { }
  
  cadastro : Usuario;

  ngOnInit() {
    if (Globals.CADASTRO == undefined) {
      alert("Faça login para continuar");
      this.router.navigate(['login']);
    } 
    else {
      this.cadastro = Globals.CADASTRO;
    }
  }

}
