import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/model/globals';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Globals]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  cadastro: Usuario;
  
  ngOnInit() {
    // if (Globals.CADASTRO == undefined) {
    //   this.router.navigate(['login']);
    // } 
    // else {
    //   this.cadastro = Globals.CADASTRO;
    // }
  }

}
