import { Categoria } from './../../model/categoria';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`http://31.220.50.40:8080/categoria`);
  }

  getById(id: number){
    return this.http.get(`http://31.220.50.40:8080/categoria/${id}`);
  }

  getByNome(nome: string){
    return this.http.get(`http://31.220.50.40:8080/categoria/nome/${nome}`);
  }

  insert(categoria: Categoria){
    return this.http.post(`http://31.220.50.40:8080/categoria`, categoria);
  }

  insertAll(categoria: Categoria[]){
    return this.http.post(`http://31.220.50.40:8080/categoria`, categoria);
  }

  update(categoria: Categoria){
    return this.http.put(`http://31.220.50.40:8080/categoria`, categoria);
  }
  delete(id: number){
    return this.http.delete(`http://31.220.50.40:8080/categoria/${id}`);
  }
}
