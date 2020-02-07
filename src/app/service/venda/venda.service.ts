import { Venda } from './../../model/venda';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`http://31.220.50.40:8080/venda`);
  }

  getById(id: number){
    return this.http.get(`http://31.220.50.40:8080/venda/${id}`);
  }

  insert(venda: Venda){
    return this.http.post(`http://31.220.50.40:8080/venda`, venda);
  }

  insertAll(venda: Venda[]){
    return this.http.post(`http://31.220.50.40:8080/venda`, venda);
  }

  update(venda: Venda){
    return this.http.put(`http://31.220.50.40:8080/venda`, venda);
  }

  delete(id: number){
    return this.http.delete(`http://31.220.50.40:8080/venda/${id}`);
  }
}
