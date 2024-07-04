import { Component, OnInit } from '@angular/core';
import { Disciplina } from './model/apostila.module';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplinasService } from './adapter/DisciplinasService';
import { Atividade } from '../atividades/model/atividade.module';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  protected aulas: string = '/assets/imagens/aulas.png';
  protected atividades: string = '/assets/imagens/atividades.png';
  protected disciplinas: Disciplina[] = [];
  protected exibirAtividades: boolean = false;
  protected disciplina: Disciplina | undefined;

  constructor(private route: ActivatedRoute, private service: DisciplinasService, private router: Router) { }

  ngOnInit(): void {
    this.setDisciplinas();
    this.validaExibicaoAtividades();
  }

  private setDisciplinas(): void {
    this.service.getDisciplinasADS().subscribe(disciplinas => {
      this.disciplinas = disciplinas;
    });
  }

  private validaExibicaoAtividades(): void {
    if (this.getIdAulaAtividadeStorage() == "S") {
      this.exibirAtividades = true;
      this.setDisciplinasStorage();
    }
  }

  private getIdAulaAtividadeStorage(): string | any {
    let id = localStorage.getItem('backAulaAtividade');
    localStorage.removeItem('backAulaAtividade');
    return id;
  }

  private setDisciplinasStorage(): void {
    const disciplina = localStorage.getItem('disciplina');
    localStorage.removeItem('disciplina');
    if (disciplina) {
      this.disciplina = JSON.parse(disciplina);
    }
  }

  protected goToAtividades(disciplina: Disciplina | undefined): void {
    this.router.navigate(['/atividades'], { state: { disciplina: disciplina } });
  }

  protected goToAulas(disciplina: Disciplina | undefined): void {
    this.router.navigate(['/aulas'], { state: { disciplina: disciplina } });
  }

  protected goToOpcaoDisciplinas(disciplina: Disciplina): void {
    this.exibirAtividades = true;
    this.disciplina = disciplina;
  }

  protected backDisciplinas(): void {
    this.exibirAtividades = false;
  }
}
