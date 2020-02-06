import { VendaService } from './../../../service/venda/venda.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProductsService } from 'src/app/service/products.service';
import { Globals } from 'src/app/model/globals';
import { Router } from '@angular/router';
import { Cadastro } from 'src/app/model/cadastro';
import { Venda } from 'src/app/model/venda';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [Globals]
})
export class ProductsListComponent implements OnInit {

  
  constructor(
    private ProductsService: ProductsService,
    private VendaService: VendaService,
    private router: Router
    ) { }
    
  venda: Venda = new Venda();
  products: Produto[];
  cadastro: Cadastro;
  ngOnInit() {
    // if (Globals.CADASTRO == undefined) {
    //   this.router.navigate(['login']);
    // } 
    // else {
    //   this.cadastro = Globals.CADASTRO;
    // }
    this.findAll();
  }

  findAll() {
    this.ProductsService.getAll().subscribe((productsOut: Produto[]) => {
      this.products = productsOut;
    })
  }

  // comprar(produto: Produto) {

  //   this.venda.usuario = Globals.CADASTRO;
  //   alert(this.venda.usuario.nome);
  //   this.VendaService.insert(this.venda).subscribe((out: Venda) => {
  //     alert("Compra realizada com sucesso!");
  //   })
  // }

  comprar(id: number) {

      this.venda.produto = new Produto();
      this.venda.usuario = new Usuario();



      this.venda.produto.id = id;
      this.venda.usuario.id = Globals.CADASTRO.id;

      console.log(JSON.stringify(this.venda));

      this.VendaService.insert(this.venda).subscribe((out: Venda) => {
        alert("Compra realizada com sucesso!");
      });
  }

}
