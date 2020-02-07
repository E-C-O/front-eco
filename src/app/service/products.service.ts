import { Produto } from './../model/produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient ) { }

  getAll(){
    return this.http.get("http://31.220.50.40:8080/produto");
  }
  getById(idProduto: number){
    return this.http.get(`http://31.220.50.40:8080/produto/${idProduto}`);
  }
  insert(products:Produto){
    return this.http.post(`http://31.220.50.40:8080/produto`,products);
  }
  update(products :Produto){
    return this.http.put(`http://31.220.50.40:8080/produto`,products);
  }

}
