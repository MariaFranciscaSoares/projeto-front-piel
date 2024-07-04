import { Injectable } from '@angular/core';
import { CalendarioDia, CalendarioDiaImpl, CalendarioMes } from '../model/CalendarioDia.module';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  constructor() { }

  obterCalendarioAno(ano: number): CalendarioMes[] {
    const calendario: CalendarioMes[] = [];

    for (let mes = 1; mes <= 6; mes++) {
      const nomeMes = this.getNomeMes(mes);
      const semanas = this.obterSemanasMes(ano, mes);



      calendario.push({ nome: nomeMes, semanas });
    }

    return calendario;
  }

  private getNomeMes(mes: number): string {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];
    return meses[mes - 1];
  }

  private obterSemanasMes(ano: number, mes: number): CalendarioDia[][] {
    const semanas: CalendarioDia[][] = [];
    const primeiroDiaMes = new Date(ano, mes - 1, 1);
    const ultimoDiaMes = new Date(ano, mes, 0);
    const diasNoMes = ultimoDiaMes.getDate();
    const primeiroDiaSemana = primeiroDiaMes.getDay() === 0 ? 7 : primeiroDiaMes.getDay();

    let dia = 1;
    while (dia <= diasNoMes) {
      const semana: CalendarioDia[] = [];

      // Adicione os dias da semana anterior ao primeiro dia do mês
      if (semanas.length == 0) {
        if (semana.length < primeiroDiaSemana - 1) {
          for (let i = 0; i < primeiroDiaSemana - 1; i++) {
            semana.push(new CalendarioDiaImpl());
          }
        }
      }

      // Adicione os dias do mês
      for (let i = 0; i < 7 && dia <= diasNoMes; i++) {
        const data = new Date(ano, mes - 1, dia);
        const finalSemana = (data.getDay() === 6 || data.getDay() === 0) && dia >= 1 && dia <= diasNoMes;

        semana.push({
          dia,
          mes,
          ano,
          finalSemana,
          diaProva: false,
          inicioAula: false,
          terminoAula: false
        });

        dia++;
      }



      semanas.push(semana);


    }
    return semanas;
  }
}