import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component'; 
import { DisciplinasComponent } from './pages/disciplinas/disciplinas.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { HomeComponent } from './noticias/home.component';
import { VideosComponent } from './pages/videos/videos.component';
import { ArtigosComponent } from './artigos/artigos.component';
import { ApostilasComponent } from './pages/apostilas/apostilas.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { EstagioComponent } from './pages/estagio/estagio.component';
import { SecretariaComponent } from './pages/secretaria/secretaria.component';
import { AtividadesComponent } from './pages/atividades/atividades.component';
import { AulasComponent } from './pages/aulas/aulas.component';
import { ExibirAulaComponent } from './pages/exibir-aula/exibir-aula.component';
import { ExibirVideosComponent } from './pages/exibir-videos/exibir-videos.component';
import { ArtigoComponent } from './pages/artigo/artigo.component';
import { ApostilaComponent } from './pages/apostila/apostila.component';
import { ExibirEstagioComponent } from './pages/exibir-estagio/exibir-estagio.component';
import { ExibirEstagioObrigatorioComponent } from './pages/exibir-estagio-obrigatorio/exibir-estagio-obrigatorio.component';
import { ExibirAtividadeComponent } from './pages/exibir-atividade/exibir-atividade.component';
import { MateriaisComponent } from './pages/materiais/materiais.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { ExibirAvaliacaoComponent } from './exibir-avaliacao/exibir-avaliacao.component';
import { BoletimComponent } from './boletim/boletim.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DisciplinasComponent,
    QuemSomosComponent,
    HomeComponent,
    VideosComponent,
    ArtigosComponent,
    ApostilasComponent,
    AgendaComponent,
    EstagioComponent,
    SecretariaComponent,
    AtividadesComponent,
    AulasComponent,
    ExibirAulaComponent,
    ExibirVideosComponent,
    ArtigoComponent,
    ApostilaComponent,
    ExibirEstagioComponent,
    ExibirEstagioObrigatorioComponent,
    ExibirAtividadeComponent,
    MateriaisComponent,
    AvaliacaoComponent,
    ExibirAvaliacaoComponent,
    BoletimComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
