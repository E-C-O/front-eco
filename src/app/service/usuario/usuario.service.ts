import { Usuario } from './../../model/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`http://localhost:8080/usuario`);
  }

  getById(id: number){
    return this.http.get(`http://localhost:8080/usuario/${id}`);
  }

  getByAllName(nome: string){
    return this.http.get(`http://localhost:8080/usuario/${nome}`)
  }

  insert(usuario: Usuario){
    return this.http.post(`http://localhost:8080/usuario`, usuario);
  }

  insertAll(usuario: Usuario[]){
    return this.http.post(`http://localhost:8080/usuario`, usuario);
  }

  update(usuario: Usuario){
    return this.http.put(`http://localhost:8080/usuario`, usuario);
  }
  
  delete(id: number){
    return this.http.delete(`http://localhost:8080/usuario/${id}`);
  }
}
