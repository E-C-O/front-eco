import { ProductsService } from '../../../service/products.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';


@Component({
  selector: 'app-products-id',
  templateUrl: './products-id.component.html',
  styleUrls: ['./products-id.component.css']
})
export class ProductsIdComponent implements OnInit {
  idProduto: number;
  products: Produto = new Produto();
  consulta: boolean;
  constructor(private ProductsService: ProductsService) { }

  ngOnInit() {
    this.consulta = false;
  }
  searchClick(){
    this.consulta = true;
    this.ProductsService.getById(this.idProduto).subscribe((productsOut: Produto) =>{
      this.products = productsOut;
    })
  }

}
