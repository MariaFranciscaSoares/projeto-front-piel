import { Component, OnInit } from '@angular/core';
import { CalendarioDia, CalendarioMes } from './model/CalendarioDia.module';
import { CalendarioService } from './adapter/CalendarioService';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  calendario: CalendarioMes[] = [];

  constructor(private calendarioService: CalendarioService) { }

  ngOnInit(): void {
    const anoAtual = new Date().getFullYear();
    this.calendario = this.calendarioService.obterCalendarioAno(anoAtual);

  }

  getStatusColor(dia: CalendarioDia): string {
    if (dia.diaProva) {
      return 'red';
    } else if (dia.finalSemana) {
      return 'lightblue';
    } else if (dia.inicioAula || dia.terminoAula) {
      return 'yellow';
    } else {
      return 'white';
    }
  }

}
