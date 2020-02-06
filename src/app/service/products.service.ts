import { Products } from './../model/products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient ) { }

  getAll(){
    return this.http.get("http://localhost:8080/produto");
  }
  getById(idProduto: number){
    return this.http.get(`http://localhost:8080/produto/${idProduto}`);
  }
  insert(products:Products){
    return this.http.post(`http://localhost:8080/produto`,products);
  }
  update(products :Products){
    return this.http.put(`http://localhost:8080/produto`,products);
  }

}
