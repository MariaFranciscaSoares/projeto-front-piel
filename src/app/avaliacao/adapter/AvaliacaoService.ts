import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Avaliacao, Questao, Resposta } from '../model/Avaliacao.module';
import { DisciplinasService } from 'src/app/pages/disciplinas/adapter/DisciplinasService';
import { Disciplina } from 'src/app/pages/disciplinas/model/apostila.module';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  constructor(private serviceDisciplina: DisciplinasService) {
    this.avaliacoes = this.gerarAvaliacoesSimuladas();
  }

  protected disciplina!: Disciplina | undefined;
  protected avaliacoes!: Avaliacao[];

  private gerarAvaliacoesSimuladas(): Avaliacao[] {
    const avaliacoes: Avaliacao[] = [];

    for (let i = 1; i <= 5; i++) {
      const questoes: Questao[] = [];
      for (let j = 1; j <= 5; j++) {
        // Criação de questões simuladas
        const respostas: Resposta[] = [
          new Resposta('Resposta A', false),
          new Resposta('Resposta B', true),
          new Resposta('Resposta C', false)
        ];

        const questao = new Questao(`Questão ${j} da Avaliação ${i}`, respostas);
        questoes.push(questao);
      }

      // Criação da avaliação simulada
      const avaliacao = new Avaliacao(i, `Avaliação ${i}`, 5, this.getDisciplinas(i), questoes, 'aberta');
      avaliacoes.push(avaliacao);
    }

    return avaliacoes;
  }

  // Método para retornar 5 avaliações simuladas de análise e desenvolvimento de sistemas
  getAvaliacoesADS(): Observable<Avaliacao[]> {
    return of(this.avaliacoes);
  }


  private getDisciplinas(id: number): Disciplina | any {
    this.serviceDisciplina.getDisciplinaById(id).subscribe(disciplina => {
      this.disciplina = disciplina;
    });
    return this.disciplina;
  }

  getAvaliacaoById(id: number): Avaliacao | null {
    this.getAvaliacoesADS();
    return this.avaliacoes.find(Avaliacao => Avaliacao.idAvaliacao === id) || null;
  }

  public concluirAvaliacao(id: number | undefined): void {
    const atividade = this.avaliacoes.find(avaliacao => avaliacao.idAvaliacao == id);
    if (atividade) {
      atividade.status = 'fechada';
    }
  }
}
