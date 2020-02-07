import { MessageService } from 'primeng/api';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/categoria';
import { Globals } from 'src/app/model/globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styleUrls: ['./categoria-cadastro.component.css'],
  providers: [Globals, MessageService]
})
export class CategoriaCadastroComponent implements OnInit {

  categoriaId: number;
  altCategoria: Categoria = new Categoria();
  categoria: Categoria = new Categoria();
  categorias: Categoria[];
  emailInval: Boolean;
  nomeCategoria: string;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private messageService: MessageService
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
      this.messageService.add({ summary: "Removido com sucesso", severity: "success" })

    }, err => {
      this.listarCategoria();
      this.messageService.add({ summary: "Erro ao remover", severity: "error" })
    });
    this.listarCategoria();
  }

  cadastrar() {

    this.categoriaService.insert(this.categoria).subscribe((out: Categoria) => {
      this.listarCategoria();
      this.messageService.add({ summary: "Cadastrado com sucesso", severity: "success" })
    }, err => {
      this.messageService.add({ summary: "Erro ao remover", severity: "error" })
    });
  }

  atualizar() {
    if (this.altCategoria.id == undefined) {
      this.messageService.add({ summary: "Erro ao atualizar", severity: "error" });
    } else {
      this.categoriaService.update(this.altCategoria).subscribe(() => {
        this.messageService.add({ summary: "Atualizado com sucesso", severity: "success" })
        this.listarCategoria();
      }, err => {
        this.messageService.add({ summary: "Erro ao atualizar", severity: "error" })
      });
    }
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
