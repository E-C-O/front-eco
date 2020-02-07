import { MessageService } from 'primeng/api';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Globals } from 'src/app/model/globals';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-atualizar',
  templateUrl: './cadastro-atualizar.component.html',
  styleUrls: ['./cadastro-atualizar.component.css'],
  providers: [Globals, MessageService]
})
export class CadastroAtualizarComponent implements OnInit {

  globalUser: Usuario;

  usuario: Usuario = new Usuario;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    if (Globals.CADASTRO == undefined) {
      this.router.navigate(['login']);
    }
    else {
      this.globalUser = Globals.CADASTRO;
    }
  }

  atualizar() {
    this.usuario.id = this.globalUser.id;
    this.usuarioService.update(this.usuario).subscribe(() => {
      this.messageService.add({summary: "Atualizado com sucesso", severity: "success"});
      Globals.CADASTRO = this.usuario;
      this.router.navigate(["home"]);
    }, err => {
      this.messageService.add({summary: "Erro ao atualizar", severity: "error"});
    })
  }


}
