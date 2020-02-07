import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/model/globals';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Globals, MessageService]
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private messageService: MessageService
    ) { }

  cadastro: Usuario;
  
  ngAfterViewInit() {
    if (Globals.STATUS) {
      // this.router.navigate(['login']);
    } 
    else {
      this.messageService.add({ summary: 'Login realizado!', severity: 'warn', sticky: true });
      // alert();
    }
  }
  
  ngOnInit() {
    window.scrollTo(0,0);
  }

  success() {
    this.messageService.add({ summary: 'Login realizado!', severity: 'warn', sticky: true });
  }

}
