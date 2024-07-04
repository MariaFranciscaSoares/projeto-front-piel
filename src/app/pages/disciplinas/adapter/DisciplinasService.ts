import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Disciplina } from '../model/apostila.module';
import { Apostila } from '../../apostilas/model/apostila.module';
import { AtividadeService } from '../../atividades/adapter/AtividadeService';
import { AulaService } from '../../aulas/adapter/AulaService';

@Injectable({
    providedIn: 'root'
})
export class DisciplinasService {

    constructor(private atividadeService: AtividadeService, private aulaService: AulaService) { }


    getDisciplinasADS(): Observable<Disciplina[]> {
        const disciplinas: Disciplina[] = [
            {
                idDisciplina: 1,
                nomeDisciplina: 'Programação I',
                apostilaDisciplina: this.getApostilas(),
                atividades: this.atividadeService.getAtividades(),
                aulas: this.aulaService.getAulas(),
                nota: 8,
                presenca: 80,
            },
            {
                idDisciplina: 2,
                nomeDisciplina: 'Algoritmos e Estrutura de Dados',
                apostilaDisciplina: this.getApostilas(),
                atividades: this.atividadeService.getAtividades(),
                aulas: this.aulaService.getAulas(),
                nota: 8,
                presenca: 80,
            },
            {
                idDisciplina: 3,
                nomeDisciplina: 'Banco de Dados',
                apostilaDisciplina: this.getApostilas(),
                atividades: this.atividadeService.getAtividades(),
                aulas: this.aulaService.getAulas(),
                nota: 8,
                presenca: 80,
            },
            {
                idDisciplina: 4,
                nomeDisciplina: 'Redes de Computadores',
                apostilaDisciplina: this.getApostilas(),
                atividades: this.atividadeService.getAtividades(),
                aulas: this.aulaService.getAulas(),
                nota: 8,
                presenca: 80,
            },
            {
                idDisciplina: 5,
                nomeDisciplina: 'Programação Web',
                apostilaDisciplina: this.getApostilas(),
                atividades: this.atividadeService.getAtividades(),
                aulas: this.aulaService.getAulas(),
                nota: 8,
                presenca: 80,
            },
            {
                idDisciplina: 6,
                nomeDisciplina: 'Engenharia de Software',
                apostilaDisciplina: this.getApostilas(),
                atividades: this.atividadeService.getAtividades(),
                aulas: this.aulaService.getAulas(),
                nota: 8,
                presenca: 80,
            }
        ];

        return of(disciplinas);
    }

    private getApostilas(): Apostila[] {
        const apostilas: Apostila[] = [
            {
                idApostila: 1,
                tituloApostila: 'Introdução Lógica de Programação',
                textoApostila: 'Aqui vai o texto da apostila sobre Introdução à Lógica de Programação...'
            },
            {
                idApostila: 2,
                tituloApostila: 'Diagramas de Banco de Dados',
                textoApostila: 'Aqui vai o texto da apostila sobre Introdução à Lógica de Programação...'
            },
            {
                idApostila: 3,
                tituloApostila: 'Sistemas Operacionais',
                textoApostila: 'Aqui vai o texto da apostila sobre Introdução à Lógica de Programação...'
            },
            {
                idApostila: 4,
                tituloApostila: 'Engenharia de Software',
                textoApostila: 'Aqui vai o texto da apostila sobre Introdução à Lógica de Programação...'
            },
            {
                idApostila: 5,
                tituloApostila: 'Estrutura de Dados',
                textoApostila: 'Aqui vai o texto da apostila sobre Introdução à Lógica de Programação...'
            }
        ];

        return apostilas;
    }

    getDisciplinaById(id: number): Observable<Disciplina | undefined> {
        return new Observable(observer => {
          this.getDisciplinasADS().subscribe(disciplinas => {  
            const disciplina = disciplinas.find(d => d.idDisciplina == id);
            observer.next(disciplina);
            observer.complete();
          });
        });
      }
}