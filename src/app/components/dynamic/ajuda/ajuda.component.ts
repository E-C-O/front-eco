import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/model/globals';
import { Cadastro } from 'src/app/model/cadastro';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.css'],
  providers: [ Globals ]
})
export class AjudaComponent implements OnInit {

  constructor(private router : Router) { }

  cadastro : Cadastro;
  
  ngOnInit() {
    if (Globals.CADASTRO == undefined) {
      // this.router.navigate(['login']);
    } 
    else {
      this.cadastro = Globals.CADASTRO;
    }
  }

}
