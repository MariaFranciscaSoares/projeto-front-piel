import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DisciplinasService } from '../disciplinas/adapter/DisciplinasService';
import { Disciplina } from '../disciplinas/model/apostila.module';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private serviceDisciplinas: DisciplinasService, private router: Router, private location: Location) { }

  // disciplinas: Disciplina[] = [];

  @Input() titulo: string = '';


  ngOnInit(): void {

    // this.serviceDisciplinas.getDisciplinasADS().subscribe(disciplinas => {
    //   this.disciplinas = disciplinas;
    // });
  }

  isSubMenuOpen: boolean = false;

  voltar(): void {
    this.location.back();
  }

}
