import { LoginService } from './service/login/login.service';
import { CadastroService } from './service/cadastro/cadastro.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/static/header/header.component';
import { FooterComponent } from './components/static/footer/footer.component';
import { BodyComponent } from './components/static/body/body.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SobreNosComponent } from './components/dynamic/sobre-nos/sobre-nos.component';
import { NavbarComponent } from './components/static/header/navbar/navbar.component';
import { HomeComponent } from './components/dynamic/home/home.component';
import { ContatoComponent } from './components/dynamic/contato/contato.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from './components/dynamic/products-list/products-list.component';
import { ProductsIdComponent } from './components/dynamic/products-id/products-id.component';
import { ProdutoComponent } from './components/dynamic/produto/produto.component';
import { CadastroComponent } from './components/dynamic/cadastro/cadastro.component';
import { CadastroListarComponent } from './components/dynamic/cadastro-listar/cadastro-listar.component';
import { LoginComponent } from './components/dynamic/login/login.component';
import { AjudaComponent } from './components/dynamic/ajuda/ajuda.component';
import { ProdutoCadastroComponent } from './components/dynamic/produto-cadastro/produto-cadastro.component';
import { ProdutoAtualizarComponent } from './components/dynamic/produto-atualizar/produto-atualizar.component';
import { SobreNosEmpresaComponent } from './components/dynamic/sobre-nos-empresa/sobre-nos-empresa.component';
import { AssociadosComponent } from './components/dynamic/associados/associados.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ContatoComponent,
    SobreNosComponent,
    NavbarComponent,
    HomeComponent,
    ProductsListComponent,
    ProductsIdComponent,
    ProdutoComponent,
    CadastroComponent,
    CadastroListarComponent,
    LoginComponent,
    AjudaComponent,
    ProdutoCadastroComponent,
    ProdutoAtualizarComponent,
    SobreNosEmpresaComponent,
    AssociadosComponent,
    


  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [CadastroService,
    LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
