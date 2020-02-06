import { CadastroAtualizarComponent } from './components/dynamic/cadastro-atualizar/cadastro-atualizar.component';
import { CategoriaCadastroComponent } from './components/dynamic/categoria-cadastro/categoria-cadastro.component';
import { Endereco } from './model/endereco';

import { SobreNosEmpresaComponent } from './components/dynamic/sobre-nos-empresa/sobre-nos-empresa.component';
import { ProdutoAtualizarComponent } from './components/dynamic/produto-atualizar/produto-atualizar.component';
import { ProdutoCadastroComponent } from './components/dynamic/produto-cadastro/produto-cadastro.component';
import { AjudaComponent } from './components/dynamic/ajuda/ajuda.component';
import { CadastroComponent } from './components/dynamic/cadastro/cadastro.component';
import { ProductsListComponent } from './components/dynamic/products-list/products-list.component';
import { ProductsIdComponent } from './components/dynamic/products-id/products-id.component';
import { HomeComponent } from './components/dynamic/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './components/dynamic/contato/contato.component';
import { SobreNosComponent } from './components/dynamic/sobre-nos/sobre-nos.component';
import { ProdutoComponent } from './components/dynamic/produto/produto.component';
import { CadastroListarComponent } from './components/dynamic/cadastro-listar/cadastro-listar.component';
import { LoginComponent } from './components/dynamic/login/login.component';
import { AssociadosComponent } from './components/dynamic/associados/associados.component';
import { PerfilComponent } from './components/dynamic/perfil/perfil.component';
import { EnderecoAtualizarComponent } from './components/dynamic/endereco/endereco-atualizar/endereco-atualizar.component';
import { EnderecoCadastroComponent } from './components/dynamic/endereco/endereco-cadastro/endereco-cadastro.component';
import { EnderecoIdComponent } from './components/dynamic/endereco/endereco-id/endereco-id.component';
import { EnderecoListComponent } from './components/dynamic/endereco/endereco-list/endereco-list.component';
import { VendaListarComponent } from './components/dynamic/venda-listar/venda-listar.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'sobrenos', component: SobreNosComponent },
  { path: 'categoria', component: CategoriaCadastroComponent },
  { path: 'produto', component: ProdutoComponent,
        children: [
          { path: 'produtos', component: ProductsListComponent },
          { path: 'produto', component: ProductsIdComponent },
          { path: 'produtoCadastro', component: ProdutoCadastroComponent },
          { path: 'produtoAtualizar', component: ProdutoAtualizarComponent },
          { path: 'produtoCadastro/:id', component: ProdutoCadastroComponent },
        ]},
        
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro-listar', component: CadastroListarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ajuda', component: AjudaComponent },
  { path:'empresa', component: SobreNosEmpresaComponent},
  { path: 'associados', component:AssociadosComponent},
  { path: 'endereco', component: Endereco},
  { path: 'enderecoId', component:EnderecoIdComponent},
  { path: 'cadastroAtualizar', component:CadastroAtualizarComponent},
  { path: 'perfil', component: PerfilComponent,
  children: [
        { path: 'compras', component: VendaListarComponent },
        { path: '', redirectTo: 'perfil', pathMatch: 'full' },
        { path: 'enderecos', component: EnderecoListComponent },
        { path: 'enderecoCadastro', component:EnderecoCadastroComponent},
        { path: 'enderecoAtualizar/:id', component:EnderecoAtualizarComponent},
        
        ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



