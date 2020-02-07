import { LoginService } from './../../../service/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/model/globals';
import { Login } from 'src/app/model/login';
import { Usuario } from 'src/app/model/usuario';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Globals, MessageService]
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private messageService: MessageService
  ) {
  }

  emailInval: boolean = false;
  senhaInval: boolean = false;


  userLogin: Login = new Login();

  ngOnInit() {
    if (status)
      alert("online");

    Globals.CADASTRO = undefined;
  }

  // valid() {
  //   let email = this.cadastro.email;
  //   let senha = this.cadastro.senha;

  //   this.emailInval = false;
  //   this.senhaInval = false;

  //   if (email == " " || email == undefined) {
  //     this.emailInval = true;
  //   } else {
  //     this.emailInval = false;
  //   }

  //   if (senha == " " || senha == undefined) {
  //     this.senhaInval = true;
  //   } else {
  //     this.senhaInval = false;
  //   }
  // }

  emailIsInval() {
    let email = this.userLogin.email;
    this.emailInval = false;

    if (email == undefined || email == null || email == "") {
      this.emailInval = true;
      return true;
    } else {
      this.emailInval = false;
      return false;
    }
  }
  senhaIsInval() {
    let senha = this.userLogin.senha;

    this.senhaInval = false;

    if (senha == undefined || senha == null || senha == "") {
      this.senhaInval = true;
      return true;
    } else {
      this.senhaInval = false;
      return false;
    }
  }



  login() {

    // this.valid();

    if (this.emailInval || this.senhaIsInval) {
      this.loginService.login(this.userLogin).subscribe((usuario: Usuario) => {
        // alert("Login realizado com sucesso");
        Globals.CADASTRO = usuario;
        Globals.STATUS = true;
        this.success();
        // this.router.navigate(['home']);
      }, err => {
        Globals.STATUS = false;
        this.failure();
      });;
    }
  }
  
  failure(){
    this.messageService.clear();
    this.messageService.add({ key: 'error',  life: 400 ,closable: true , summary: 'Login inválido!', severity: 'error'});
  }

  success() {
    this.messageService.clear();
    this.messageService.add({ life: 1000 ,closable: true , summary: 'Login realizado!', severity: 'success' });
  }
  
  redirect(){
    this.router.navigate(['home']);
  }
}
