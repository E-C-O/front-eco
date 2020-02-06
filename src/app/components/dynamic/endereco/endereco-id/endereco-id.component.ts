import { Endereco } from 'src/app/model/endereco';
import { Component, OnInit } from '@angular/core';
import { EnderecoService } from 'src/app/service/endereco/endereco.service';



@Component({
  selector: 'app-endereco-id',
  templateUrl: './endereco-id.component.html',
  styleUrls: ['./endereco-id.component.css']
})
export class EnderecoIdComponent implements OnInit {

  idEndereco: number;

  endereco: Endereco;
  consulta: boolean;

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit() {
    this.consulta = false;
  }
  searchClick(){
    this.consulta = true;
    this.enderecoService.getById(this.idEndereco).subscribe((enderecoOut: Endereco) =>{
      this.endereco = enderecoOut;
    })
  }
}






