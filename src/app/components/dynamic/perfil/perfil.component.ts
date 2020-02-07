import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/model/globals';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [Globals, MessageService]
})
export class PerfilComponent implements OnInit {

  user: Usuario;

  constructor(
    private router: Router,
    private messageService: MessageService
  ) { }


  ngOnInit() {
    if (Globals.CADASTRO == undefined) {
      setTimeout(() => {
        this.messageService.add({ key: 'global' ,severity: 'warn', summary: '((ECO))', detail: 'É preciso logar para continuar' });
      });
      this.router.navigate(['login']);
    }
    else {
      this.user = Globals.CADASTRO;
    }
  }

  ngAfterViewInit() {

  }


}
