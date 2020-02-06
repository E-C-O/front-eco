import { Products } from './../../../model/products';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-atualizar',
  templateUrl: './produto-atualizar.component.html',
  styleUrls: ['./produto-atualizar.component.css']
})
export class ProdutoAtualizarComponent implements OnInit {

  produto : Products = new Products(0,"","","",0,0);
  idValid : boolean = true;

  constructor(private produtoService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
  }

  idValido(){
    let produto : Products = new Products(0,"","","",0,0);
    this.produtoService.getById(this.produto.idProduto).subscribe((res: Products) => {
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
      this.produtoService.update(this.produto).subscribe((produto: Products) => {
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
