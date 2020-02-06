import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { Globals } from 'src/app/model/globals';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [Globals]
})
export class NavbarComponent implements OnInit {

  usuario: Usuario;
  alt: Boolean;

  constructor() { }

  ngOnInit() {

    this.usuario = Globals.CADASTRO;

  }

  alterna(){
    if(this.usuario != undefined){
      this.alt = false;
    }
    else{
      this.alt = true;
    }
  }
 

}