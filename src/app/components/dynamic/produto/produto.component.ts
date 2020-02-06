import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/model/globals';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  providers: [Globals]
})
export class ProdutoComponent implements OnInit {

  usuario : Usuario;

  constructor(private router: Router) { }


  ngOnInit() {
    if (Globals.CADASTRO == undefined) {
      alert("Faça login para continuar");
      this.router.navigate(['/login']);
    }
    else {
      this.router.navigate(["/produto/produtos"]);
    }

  }

}
