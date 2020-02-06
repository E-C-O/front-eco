import { Globals } from 'src/app/model/globals';
import { Component, OnInit } from '@angular/core';
import { Cadastro } from 'src/app/model/cadastro';
import { CadastroService } from 'src/app/service/cadastro/cadastro.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-cadastro-listar',
  templateUrl: './cadastro-listar.component.html',
  styleUrls: ['./cadastro-listar.component.css'],
  providers: [ Globals ]
})
export class CadastroListarComponent implements OnInit {

  usuarios = [];
  constructor(private cadastroService: CadastroService, private router : Router) { }

  cadastro : Usuario;
  ngOnInit() {
    if (Globals.CADASTRO == undefined) {
      this.router.navigate(['login']);
    } 
    else {
      this.cadastro = Globals.CADASTRO;
    }
    this.findAll();
  }

  findAll(){
    this.cadastroService.getAll().subscribe((cadastro: Cadastro[])=>{
      this.usuarios = cadastro;
    }, err =>{
      console.log(`Erro cod: ${err.status}`);
    });
  }
}
