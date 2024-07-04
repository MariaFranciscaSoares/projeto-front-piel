import { Component, OnInit } from '@angular/core';
import { Aula } from './model/aula.module';
import { AulaService } from './adapter/AulaService';
import { ActivatedRoute, Router } from '@angular/router';
import { Disciplina } from '../disciplinas/model/apostila.module';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {

  protected aulas: Aula[] = [];
  protected disciplina!: Disciplina;

  constructor(private route: ActivatedRoute, private aulaService: AulaService, private router: Router) { }

  ngOnInit(): void {
    this.setDisciplinaEAulaRouter();
    this.validateDisplayDisciplina();
  }

  protected setDisciplinaEAulaRouter(): void {
    this.route.params.subscribe(params => {
      if (history.state && history.state.disciplina) {
        this.disciplina = history.state.disciplina;
        this.aulas = this.disciplina.aulas;
        this.setDisciplinaStorage();
      }
    });
  }

  protected validateDisplayDisciplina(): void {
    const disciplina = localStorage.getItem('disciplina');
    if (disciplina) {
      this.disciplina = JSON.parse(disciplina);
      this.aulas = this.disciplina.aulas;
    }
  }

  protected setDisciplinaStorage(): void {
    localStorage.setItem('disciplina', JSON.stringify(this.disciplina));
  }

  protected backOptionDisciplina(): void {
    localStorage.setItem('backAulaAtividade', "S");
    this.router.navigate(['/disciplina']);
  }

  protected goToExibirAulas(id: number): void {
    this.router.navigate(['/exibir-aula', id]);
  }

}
