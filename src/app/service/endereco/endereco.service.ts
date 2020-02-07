import { Endereco } from './../../model/endereco';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`http://31.220.50.40:8080/endereco`);
  }

  getById(id: number){
    return this.http.get(`http://31.220.50.40:8080/endereco/${id}`);
  }

  getByRua(rua: string){
    return this.http.get(`http://31.220.50.40:8080/endereco/${rua}`)
  }

  insert(endereco: Endereco){
    return this.http.post(`http://31.220.50.40:8080/endereco`, endereco);
  }

  insertAll(endereco: Endereco[]){
    return this.http.post(`http://31.220.50.40:8080/endereco`, endereco);
  }

  update(endereco: Endereco){
    return this.http.put(`http://31.220.50.40:8080/endereco`, endereco);
  }
  
  deleteById(id: number){
    return this.http.delete(`http://31.220.50.40:8080/endereco/${id}`);
  }
}
