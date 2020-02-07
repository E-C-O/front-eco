import { Globals } from './../../../model/globals';
import { Component, OnInit } from '@angular/core';
import { VendaService } from 'src/app/service/venda/venda.service';
import { Venda } from 'src/app/model/venda';

@Component({
  selector: 'app-venda-listar',
  templateUrl: './venda-listar.component.html',
  styleUrls: ['./venda-listar.component.css'],
  providers: [Globals]
})
export class VendaListarComponent implements OnInit {

  vendas: Venda[];

  constructor(
    private vendaService: VendaService,

    ) { }

  ngOnInit() {
    this.listarVendas();
  }



  listarVendas(){
    this.vendas = Globals.CADASTRO.venda;
    // this.vendaService.getAll().subscribe((out: Venda[])=>{
    //   this.vendas = out;
    // });
  }
}
