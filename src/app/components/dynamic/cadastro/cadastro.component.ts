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

  usuario : Usuario = new Usuario();


  senhaNaoConferem: boolean = true;
  emailInvalido: boolean = true;
  nomeInvalido: boolean = true;
  usuarios = [];



  senha2: string;



  constructor(
    private usuarioService: UsuarioService,
    private messageService: MessageService,
    private router: Router) {
  }


  cadastrar() {
    this.usuarioService.insert(this.usuario).subscribe((usuario: Usuario) => {
      this.usuario = usuario;
      this.success();
    }, err => {
      console.log(`Erro cod: ${err.status}`);
      this.failure();
    });
  }

  failure(){
    this.messageService.clear();
    this.messageService.add({ key: 'error',  life: 400 ,closable: true , summary: 'Login inválido!', severity: 'error'});
  }

  success() {
    this.messageService.clear();
    this.messageService.add({ life: 1000 ,closable: true , summary: 'Login realizado!', severity: 'success' });
  }
  
  redirect(){
    this.router.navigate(['login']);
  }


}
