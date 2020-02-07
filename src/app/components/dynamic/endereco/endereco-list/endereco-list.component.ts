import { MessageService } from 'primeng/api/';

import { Endereco } from 'src/app/model/endereco';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/model/globals';
import { Cadastro } from 'src/app/model/cadastro';
import { EnderecoService } from 'src/app/service/endereco/endereco.service';

@Component({
  selector: 'app-endereco-list',
  templateUrl: './endereco-list.component.html',
  styleUrls: ['./endereco-list.component.css'],
  providers: [ Globals,MessageService]
})

export class EnderecoListComponent implements OnInit {

  constructor(
    private enderecoService: EnderecoService, 
    private router : Router,
    private messageService: MessageService) { }

  endereco: Endereco[];
  cadastro : Cadastro;

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.endereco = Globals.CADASTRO.endereco;
    // this.enderecoService.getAll().subscribe((enderecoOut: Endereco[])=>{
    //   this.endereco = enderecoOut;
    // })
  }

  remover(id: number){
    this.enderecoService.deleteById(id).subscribe((out: string)=>{
      this.messageService.add({summary: "Endereço removido!", severity: "success"});
      this.findAll();
    },err=>{
      this.messageService.add({summary: "Erro ao remover endereço.", severity: "error"});
      this.findAll();
    })
  }
}

