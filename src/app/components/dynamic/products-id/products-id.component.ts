import { ProductsService } from '../../../service/products.service';
import { Component, OnInit } from '@angular/core';
import { Products } from '../../../model/products';

@Component({
  selector: 'app-products-id',
  templateUrl: './products-id.component.html',
  styleUrls: ['./products-id.component.css']
})
export class ProductsIdComponent implements OnInit {
  idProduto: number
  products: Products = new Products(0,'','','',0,0)
  consulta: boolean;
  constructor(private ProductsService: ProductsService) { }

  ngOnInit() {
    this.consulta = false;
  }
  searchClick(){
    this.consulta = true;
    this.ProductsService.getById(this.idProduto).subscribe((productsOut: Products) =>{
      this.products = productsOut;
    })
  }

}
