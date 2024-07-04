import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../pages/disciplinas/model/apostila.module';
import { DisciplinasService } from '../pages/disciplinas/adapter/DisciplinasService';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.component.html',
  styleUrls: ['./boletim.component.css']
})
export class BoletimComponent implements OnInit {

  protected disciplinas: Disciplina[] = [];

  constructor(private service: DisciplinasService) { }

  ngOnInit(): void {
    this.setDisciplinas();
  }

  private setDisciplinas(): void {
    this.service.getDisciplinasADS().subscribe(disciplinas => {
      this.disciplinas = disciplinas;
    });
  }

}
