import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Produto } from 'src/app/model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`http://localhost:8080/produto`);
  }

  getById(id: number){
    return this.http.get(`http://localhost:8080/produto/{id}`);
  }

  getByNome(nome: string){
    return this.http.get(`http://localhost:8080/produto/{nome}`)
  }

  insert(produto: Produto){
    return this.http.post(`http://localhost:8080/produto`, produto);
  }

  insertAll(produto: Produto[]){
    return this.http.post(`http://localhost:8080/produto`, produto);
  }

  update(produto: Produto){
    return this.http.put(`http://localhost:8080/produto`, produto);
  }
  
  delete(id: number){
    return this.http.delete(`http://localhost:8080/produto/{id}`);
  }
}
