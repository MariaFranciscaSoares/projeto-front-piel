import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplinasService } from '../disciplinas/adapter/DisciplinasService';
import { Disciplina } from '../disciplinas/model/apostila.module';
import { Atividade } from './model/atividade.module';
import { AtividadeService } from './adapter/AtividadeService';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {

  protected atividades: Atividade[] | undefined = [];
  protected disciplina!: Disciplina | undefined;

  constructor(private route: ActivatedRoute, private disciplinasService: DisciplinasService, private router: Router) { }

  ngOnInit(): void {
    this.setDisciplinasEAtividades();
    this.validateDisplayDisciplina();
  }

  private setDisciplinasEAtividades(): void {
    this.route.params.subscribe(params => {
      if (history.state && history.state.disciplina) {
        this.disciplina = history.state.disciplina;
        this.atividades = this.disciplina?.atividades;
        this.setDisciplinaStorage();
      }
    });
  }

  protected validateDisplayDisciplina(): void {
    const IdDisciplina = localStorage.getItem('IdDisciplina');
    if (IdDisciplina) {
       this.getDisciplinaService(+IdDisciplina);
    }
  }

  protected getDisciplinaService(id: number): void{
    this.disciplinasService.getDisciplinaById(id).subscribe(disciplina => {
      this.disciplina = disciplina;
      this.atividades = this.disciplina?.atividades;
    }); 
  }

  protected setDisciplinaStorage(): void {
    localStorage.setItem('IdDisciplina', JSON.stringify(this.disciplina?.idDisciplina));
    localStorage.setItem('disciplina', JSON.stringify(this.disciplina));
  }

  protected goToExibirAtividades(id: number): void {
    this.router.navigate(['/exibir-atividade', id]);
  }

  protected backOptionDisciplina(): void {
    localStorage.setItem('backAulaAtividade', "S");
    this.router.navigate(['/disciplina']);
  }
}