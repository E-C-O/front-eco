import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cadastro } from 'src/app/model/cadastro';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(cadastro : Cadastro){
      return this.http.post(`http://cloud.professorisidro.com.br:8088/usuario/login`, cadastro);
  }

}
