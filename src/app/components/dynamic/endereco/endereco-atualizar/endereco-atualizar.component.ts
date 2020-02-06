
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnderecoService } from 'src/app/service/endereco/endereco.service';
import { Endereco } from 'src/app/model/endereco';

@Component({
  selector: 'app-endereco-atualizar',
  templateUrl: './endereco-atualizar.component.html',
  styleUrls: ['./endereco-atualizar.component.css']
})
export class EnderecoAtualizarComponent implements OnInit {

  endereco : Endereco = new Endereco();
  idValid : boolean = true;
  

  constructor(
    private enderecoService: EnderecoService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.endereco.id = this.route.snapshot.params["id"];
  }

  idValido(){
    let endereco : Endereco = new Endereco();
    this.enderecoService.getById(this.endereco.id).subscribe((res: Endereco) => {
      endereco = res;
      if(endereco == null){
        alert("Id inválido");
        this.idValid = false;
        this.router.navigate(['/enderecos']);
      }
      else{
        this.idValid = true;
      }
    });
  }

  atualizar() {
    // this.idValido();
    // if(!this.idValid){
      this.enderecoService.update(this.endereco).subscribe((endereco: Endereco) => {
        this.endereco = endereco;
        alert("Atualizado com sucesso!");
        this.router.navigate(['/perfil']);
      }, err => {
        console.log(`Erro cod: ${err.status}`);
        alert(`Erro cod: ${err.status}`);
      });
    // }
  }

}










