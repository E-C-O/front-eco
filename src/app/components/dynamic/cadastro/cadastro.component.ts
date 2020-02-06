import { Cadastro } from 'src/app/model/cadastro';
import { CadastroService } from 'src/app/service/cadastro/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  ngOnInit() {
  }

  usuario : Usuario = new Usuario();


  senhaNaoConferem: boolean = true;
  emailInvalido: boolean = true;
  nomeInvalido: boolean = true;
  usuarios = [];



  senha2: string;



  constructor(private usuarioService: UsuarioService) {
  }




  atualizar() {
    this.usuarioService.getAll().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    }, err => {
      console.log(`Erro cod: ${err.status}`);
    });

    this.usuarios.forEach(usuario => {
      if (usuario.email == this.usuario.email)
        this.emailInvalido = true;
      this.usuario.id = usuario.idUsuario;
    });

    this.usuarioService.update(this.usuario).subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    }, err => {
      console.log(`Erro cod: ${err.status}`);
    });
  }





  cadastrar() {
    this.usuarioService.insert(this.usuario).subscribe((usuario: Usuario) => {
      this.usuario = usuario;
      alert("Usuario cadastrado");
    }, err => {
      console.log(`Erro cod: ${err.status}`);
      alert("Erro ao cadastrar");
    });
  }



}
