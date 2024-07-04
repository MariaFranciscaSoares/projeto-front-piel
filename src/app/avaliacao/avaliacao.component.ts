import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../pages/disciplinas/adapter/DisciplinasService';
import { ActivatedRoute, Router } from '@angular/router';
import { Disciplina } from '../pages/disciplinas/model/apostila.module';
import { AvaliacaoService } from './adapter/AvaliacaoService';
import { Avaliacao } from './model/Avaliacao.module';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit {

  protected aulas: string = '/assets/imagens/aulas.png';
  protected atividades: string = '/assets/imagens/atividades.png';
  protected disciplinas: Disciplina[] = [];
  protected exibirAtividades: boolean = false;
  protected avaliacoes: Avaliacao[] = [];

  protected disciplina: Disciplina | undefined;

  constructor(private route: ActivatedRoute, private service: DisciplinasService, private router: Router, private avaliacaoService: AvaliacaoService) { }

  ngOnInit(): void {
    this.getAvaliacoesADS();
  }

  protected goToAvaliacao(id: number): void {
    this.router.navigate(['/exibir-avaliacao', id]);
  }


  getAvaliacoesADS(): void {
    this.avaliacaoService.getAvaliacoesADS()
      .subscribe(avaliacoes => {
        this.avaliacoes = avaliacoes;
      });
  }
}

