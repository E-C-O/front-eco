import { Cadastro } from 'src/app/model/cadastro';
import { CadastroService } from 'src/app/service/cadastro/cadastro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  ngOnInit() {
  }

  cadastro: Cadastro = new Cadastro(0, '', '', '', '');


  senhaNaoConferem: boolean = true;
  emailInvalido: boolean = true;
  nomeInvalido: boolean = true;
  usuarios = [];



  senha2: string;



  constructor(private cadastroService: CadastroService) {
  }




  atualizar() {
    this.cadastroService.getAll().subscribe((usuarios: Cadastro[]) => {
      this.usuarios = usuarios;
    }, err => {
      console.log(`Erro cod: ${err.status}`);
    });

    this.usuarios.forEach(usuario => {
      if (usuario.email == this.cadastro.email)
        this.emailInvalido = true;
      this.cadastro.idUsuario = usuario.idUsuario;
    });

    this.cadastroService.update(this.cadastro).subscribe((usuarios: Cadastro[]) => {
      this.usuarios = usuarios;
    }, err => {
      console.log(`Erro cod: ${err.status}`);
    });
  }





  cadastrar() {
    this.cadastroService.insert(this.cadastro).subscribe((cadastro: Cadastro) => {
      this.cadastro = cadastro;
    }, err => {
      console.log(`Erro cod: ${err.status}`);
    });
  }



}
