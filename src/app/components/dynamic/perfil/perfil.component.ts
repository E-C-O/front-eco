import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/model/globals';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [ Globals]
})
export class PerfilComponent implements OnInit {

    user:Usuario;

  constructor(private router : Router) { }

  ngOnInit() {
   if (Globals.CADASTRO == undefined) {
      alert("Faça login para continuar");
      this.router.navigate(['login']);
    } 
    else {
      this.user = Globals.CADASTRO;
    }
  }

}
