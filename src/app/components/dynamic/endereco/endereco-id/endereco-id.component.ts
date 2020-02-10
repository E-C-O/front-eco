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
  emailInval: Boolean;

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit() {
    window.scroll(0,0);
    this.consulta = false;
  }
  searchClick(){
    this.consulta = true;
    this.enderecoService.getById(this.idEndereco).subscribe((enderecoOut: Endereco) =>{
      this.endereco = enderecoOut;
    })
  }
}






