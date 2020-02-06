import { Cadastro } from './../../model/cadastro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`http://cloud.professorisidro.com.br:8088/usuario/all`);
  }

  getById(id: number){
    return this.http.get(`http://cloud.professorisidro.com.br:8088/usuario/${id}`);
  }

  insert(cadastro: Cadastro){
    return this.http.post(`http://cloud.professorisidro.com.br:8088/usuario/new`, cadastro);
  }

  update(cadastro: Cadastro){
    return this.http.put(`http://cloud.professorisidro.com.br:8088/usuario/`, cadastro);
  }

}
