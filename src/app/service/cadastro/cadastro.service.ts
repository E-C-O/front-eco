import { Cadastro } from './../../model/cadastro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`http://31.220.50.40:8080/usuario/all`);
  }

  getById(id: number){
    return this.http.get(`http://31.220.50.40:8080/usuario/${id}`);
  }

  insert(cadastro: Cadastro){
    return this.http.post(`http://31.220.50.40:8080/usuario/new`, cadastro);
  }

  update(cadastro: Cadastro){
    return this.http.put(`http://31.220.50.40:8080/usuario/`, cadastro);
  }

}
