import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  // { path: 'disciplina/:id', component: DisciplinasComponent },
  { path: 'disciplina', component: DisciplinasComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'artigos', component: ArtigosComponent },
  { path: 'apostilas', component: ApostilasComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'estagio', component: EstagioComponent },
  { path: 'secretaria', component: SecretariaComponent },
  { path: 'atividades', component: AtividadesComponent },
  { path: 'aulas', component: AulasComponent },
  { path: 'exibir-aula/:id', component: ExibirAulaComponent },
  { path: 'exibir-atividade/:id', component: ExibirAtividadeComponent },
  { path: 'exibir-video/:id', component: ExibirVideosComponent },
  { path: 'exibir-artigo/:id', component: ArtigoComponent },
  { path: 'exibir-apostila/:id', component: ApostilaComponent },
  { path: 'descricoes-estagio', component: ExibirEstagioComponent },
  { path: 'descricoes-estagio-obrigatorio', component: ExibirEstagioObrigatorioComponent },
  { path: 'materiais', component: MateriaisComponent },
  { path: 'avaliacao', component: AvaliacaoComponent },
  { path: 'exibir-avaliacao/:id', component: ExibirAvaliacaoComponent },
  { path: 'boletim', component: BoletimComponent },
  { path: 'contato', component: ContatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
