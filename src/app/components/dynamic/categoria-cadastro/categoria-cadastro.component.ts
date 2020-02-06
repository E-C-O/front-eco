import { CategoriaService } from 'src/app/service/categoria/categoria.service';


import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/categoria';
import { Globals } from 'src/app/model/globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styleUrls: ['./categoria-cadastro.component.css'],
  providers: [Globals]
})
export class CategoriaCadastroComponent implements OnInit {

  categoriaId: number;
  altCategoria: Categoria = new Categoria();
  categoria: Categoria = new Categoria();
  categorias: Categoria[];
  nomeCategoria: string;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit() {
    if (Globals.CADASTRO == undefined) {
      alert("Faça login para continuar");
      this.router.navigate(['/login']);
    }
    else {
      // this.router.navigate(["/produto/produtos"]);
    }

    this.listarCategoria();

  }

  remover() {
    this.categoriaService.delete(this.categoria.id).subscribe(() => {
      this.listarCategoria();
      alert("removido com sucesso");
    }, err => {
      this.listarCategoria();
      alert("erro ao remover");
    });
    this.listarCategoria();
  }

  cadastrar() {

    this.categoriaService.insert(this.categoria).subscribe((out: Categoria) => {
      alert("Cadastrado com sucesso!");
      this.listarCategoria();
    }, err => {
      alert("Erro ao cadastrar");
    });
  }

  atualizar() {
    this.categoriaService.update(this.altCategoria).subscribe(() => {
      alert("Atualizado com sucesso!");
      this.listarCategoria();
    }, err => {
      alert("Erro ao atualizar.");
    });
  }

  listarCategoria() {
    this.categoriaService.getAll().subscribe((out: Categoria[]) => {
      this.categorias = out;
    });
  }

  buscaNome() {
    if (this.nomeCategoria == "") {
      this.listarCategoria();
    }
    else {
      this.categoriaService.getByNome(this.nomeCategoria).subscribe((out: Categoria[]) => {
        this.categorias = out;
      });
    }
  }

}
