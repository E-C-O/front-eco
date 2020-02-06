import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnderecoService } from 'src/app/service/endereco/endereco.service';
import { Usuario } from 'src/app/model/usuario';
import { Endereco } from 'src/app/model/endereco';
import { Globals } from 'src/app/model/globals';

@Component({
  selector: 'app-endereco-cadastro',
  templateUrl: './endereco-cadastro.component.html',
  styleUrls: ['./endereco-cadastro.component.css'],
  providers: [Globals]
})
export class EnderecoCadastroComponent implements OnInit {
  

  usuarioId: number;
  endereco: Endereco = new Endereco();

  constructor(private enderecoService: EnderecoService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
  }

  cadastrar() {
    //this.usuario.idUsuario = this.usuarioId;
    
    let usuario : Usuario = new Usuario();
    usuario.id = Globals.CADASTRO.id;
    console.log(usuario.id);
    this.endereco.usuario = usuario;
    this.enderecoService.insert(this.endereco).subscribe((endereco: Endereco) => {
      this.endereco = endereco;
      alert("Endereço cadastrado com sucesso!");
      this.router.navigate(['/perfil/enderecos']);
    }, err => {
      alert(`Erro ao cadastrar${err.status}`);
    });
  }
}
