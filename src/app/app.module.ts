import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NavBarComponent } from './shared/navbar/navbar-component';
import { TopBarComponent } from './shared/topbar/topbar-component';

import { LivroComponent } from './livros/livro/livro-component';
import { LivroListComponent } from './livros/livrolist/livrolist-component';
import { LivrosComponent } from './livros/livrolist/livros-component';

import { ActionComponent } from './shared/action/action-component';

import { CadastroComponent } from './modal/cadastro/cadastro-component';
import { DevolverComponent } from './modal/devolver/devolver-component';
import { EditarComponent } from './modal/editar/editar-component';
import { ExcluirComponent } from './modal/excluir/excluir-component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmprestarComponent } from './modal/emprestar/emprestar-component';

@NgModule({
  declarations: [
    AppComponent,

    TopBarComponent,
    NavBarComponent,

    LivroComponent,
    LivrosComponent,
    LivroListComponent,

    ActionComponent,

    CadastroComponent,
    EmprestarComponent,
    DevolverComponent,
    EditarComponent,
    ExcluirComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
