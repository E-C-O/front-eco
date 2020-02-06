
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
  providers: [ Globals]
})

export class EnderecoListComponent implements OnInit {

  constructor(private enderecoService: EnderecoService, private router : Router) { }

  endereco: Endereco[];
  cadastro : Cadastro;

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.enderecoService.getAll().subscribe((enderecoOut: Endereco[])=>{
      this.endereco = enderecoOut;
    })
  }

  remover(id: number){
    this.enderecoService.deleteById(id).subscribe((out: string)=>{
      alert("Endereço removido!");
      this.findAll();
    },err=>{
      alert("Erro ao remover endereço");
      this.findAll();
    })
  }
}

