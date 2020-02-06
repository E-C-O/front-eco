import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto/produto.service';
import { Categoria } from 'src/app/model/categoria';

@Component({
  selector: 'app-produto-atualizar',
  templateUrl: './produto-atualizar.component.html',
  styleUrls: ['./produto-atualizar.component.css']
})
export class ProdutoAtualizarComponent implements OnInit {

  produto : Produto = new Produto();
  categoriaId : number;
  categoria : Categoria = new Categoria();
  idValid : boolean = true;

  constructor(private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
  }

  idValido(){
    let produto : Produto = new Produto();
    this.produtoService.getById(this.produto.id).subscribe((res: Produto) => {
      produto = res;
      if(produto == null){
        alert("Id inválido");
        this.idValid = false;
        this.router.navigate(['/produtos']);
      }
      else{
        this.idValid = true;
      }
    });
  }

  atualizar() {
    // this.idValido();
    // if(!this.idValid){
      this.categoria.id = this.categoriaId;
      this.produto.categoria = this.categoria;
      alert(this.categoriaId);
      this.produtoService.update(this.produto).subscribe((produto: Produto) => {
        this.produto = produto;
        alert("Atualizado com sucesso!");
        this.router.navigate(['/produtos']);
      }, err => {
        console.log(`Erro cod: ${err.status}`);
        alert(`Erro cod: ${err.status}`);
      });
    // }
  }

}
