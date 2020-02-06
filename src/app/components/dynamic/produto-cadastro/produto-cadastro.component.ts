
import { Produto } from 'src/app/model/produto';
import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/primeng';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/service/produto/produto.service';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
import { Categoria } from 'src/app/model/categoria';
import { SelectItem } from 'primeng/api/selectitem';


@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  produto: Produto = new Produto();
  categoriaId : number;
  categoriasList: Categoria[] = new Array<Categoria>();

  categorias: SelectItem[];

  categoria : Categoria = new Categoria();




  
  ngOnInit() {

    this.categoriaSelector();
   
  }

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router) {

      
    //   this.categorias = [
    //     {label:'Select City', value:null},
    //     {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
    //     {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
    //     {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
    //     {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
    //     {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
    // ];
  }

  categoriaSelector() {
    this.categoriaService.getAll().subscribe((out: Categoria[]) => {
      this.categoriasList = out;

      this.categorias = [
        {label: "Categoria", value: null}
      ];
      for (let i = 0; i < this.categoriasList.length; i++) {
        this.categorias.push(
          {label: this.categoriasList[i].nome, value: this.categoriasList[i].id});
      }
      
      // this.categoriasList.forEach(categoria => {
      //   this.categorias = [
      //     {label: categoria.nome, value: categoria.id}
      //   ];
      // });
      
    });
    
    
    

    // for (let i = 0; i < this.categoriasList.length; i++) {
    //   console.log(this.categoriasList[i].nome);
    //   this.categorias.push({ label: this.categoriasList[i].nome, value: this.categoriasList[i].id});
    // }

    
  }


  cadastrar() {
    // alert(JSON.stringify(this.categoriaForm.value))

    this.categoria.id = this.categoriaId;
    this.produto.categoria = this.categoria;
    this.produtoService.insert(this.produto).subscribe((produto: Produto) => {
      this.produto = produto;
      // alert(this.categoria.id)
      alert("Cadastrado com sucesso!");
      this.router.navigate(['/produto/produtos']);
    }, err => {
      console.log(`Erro cod: ${err.status}`);
      alert(`Erro cod: ${err.status}`);
    });
  }
}
