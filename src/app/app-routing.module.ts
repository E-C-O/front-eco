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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products-id', component: ProductsIdComponent },
  { path: 'products-list', component: ProductsListComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'sobrenos', component: SobreNosComponent },
  { path: 'produtos', component: ProductsListComponent },
  { path: 'produto', component: ProductsIdComponent },
  { path: 'produtoCadastro', component: ProdutoCadastroComponent },
  { path: 'produtoAtualizar', component: ProdutoAtualizarComponent },
  { path: 'produtoCadastro/:id', component: ProdutoCadastroComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro-listar', component: CadastroListarComponent },
  { path: 'login', component: LoginComponent },
  {path: 'ajuda', component: AjudaComponent },
  {path:'empresa', component: SobreNosEmpresaComponent},
  {path: 'associados', component:AssociadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



