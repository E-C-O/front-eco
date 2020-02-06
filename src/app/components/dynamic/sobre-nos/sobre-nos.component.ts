import { Component, OnInit } from '@angular/core';
import { Cadastro } from 'src/app/model/cadastro';
import { Router } from '@angular/router';
import { Globals } from 'src/app/model/globals';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css'],
  providers: [ Globals ]
})
export class SobreNosComponent implements OnInit {

  cadastro : Cadastro;

  constructor(private router : Router) { }

  ngOnInit() {
    // if (Globals.CADASTRO == undefined) {
    //   this.router.navigate(['login']);
    // } 
    // else {
    //   this.cadastro = Globals.CADASTRO;
    // }
  }

  over0: boolean = false;
  over1: boolean = false;
  over2: boolean = false;
  over3: boolean = false;
  over4: boolean = false;


}
