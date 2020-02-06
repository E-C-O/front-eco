import { ProductsService } from './../../../service/products.service';
import { Products } from 'src/app/model/products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  produto: Products = new Products(0,"","","",0,0);

  ngOnInit() {
  }

  constructor(private produtoService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) {
  }


  cadastrar() {
    this.produtoService.insert(this.produto).subscribe((produto: Products) => {
      this.produto = produto;
      alert("Cadastrado com sucesso!");
      this.router.navigate(['/produtos']);
    }, err => {
      console.log(`Erro cod: ${err.status}`);
      alert(`Erro cod: ${err.status}`);
    });
  }
}
