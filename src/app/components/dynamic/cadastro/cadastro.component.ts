import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [MessageService]
})
export class CadastroComponent implements OnInit {

  ngOnInit() {
  }

  usuario: Usuario = new Usuario();


  senhaNaoConferem: boolean = true;
  emailInvalido: boolean = true;
  nomeInvalido: boolean = true;
  usuarios = [];


  senha: string = "";
  senha2: string;



  constructor(
    private usuarioService: UsuarioService,
    private messageService: MessageService,
    private router: Router) {
  }

  validaSenha() {
    if (this.senha === this.senha2) {
      this.senhaNaoConferem = false;
    }
    else {
      this.senhaNaoConferem = true;
    }
  }

  cadastrar() {
    this.validaSenha();
    this.messageService.clear();
    if (this.usuario.email == undefined) {
      this.messageService.add({ key: 'error', life: 4000, summary: 'Email Requerido!', severity: 'error' });
    }
    if (this.senha == undefined) {
      this.messageService.add({ key: 'error', life: 4000, summary: 'Senha Requerida!', severity: 'error' });
    }
    if (this.senha.length < 6) {
      this.messageService.add({ key: 'error', life: 4000, summary: 'Senha muito fraca!', severity: 'error', detail: "A senha deve conter no mínimo 6 caractéres" });
    }
    else if (this.senhaNaoConferem) {
      this.messageService.add({ key: 'error', life: 400, summary: 'Senhas não conferem!', severity: 'error' });
    } else {
      this.usuario.senha = this.senha;
      this.usuarioService.insert(this.usuario).subscribe((usuario: Usuario) => {
        this.usuario = usuario;
        this.success();
      }, err => {
        console.log(`Erro cod: ${err.status}`);
        this.failure();
      });
    }
  }

  failure() {
    this.messageService.clear();
    this.messageService.add({ key: 'error', life: 400, summary: 'Cadastro inválido!', severity: 'error' });
  }

  success() {
    this.messageService.clear();
    this.messageService.add({ life: 1000, summary: 'Cadastro realizado!', severity: 'success' });
  }

  redirect() {
    this.router.navigate(['login']);
  }



}
