import { Injectable } from '@angular/core';
import { Aula } from '../model/aula.module';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  constructor() { }

  private aulas: Aula[] = [
    { idAula: 1, tituloAula: 'Introdução aos Conceitos Básicos de Programação', statusAula: 'concluída', urlVideo: 'URL_VIDEO_AULA_1', topicos: ['Variáveis', 'Operadores'] },
    { idAula: 2, tituloAula: 'Estruturas de Controle: Decisões e Repetições', statusAula: 'em andamento', urlVideo: 'URL_VIDEO_AULA_2', topicos: ['If-else', 'Switch', 'Loops'] },
    { idAula: 3, tituloAula: 'Manipulação de Dados: Variáveis e Tipos de Dados', statusAula: 'aberta', urlVideo: 'URL_VIDEO_AULA_3', topicos: ['Tipos Primitivos', 'Strings', 'Arrays'] },
    { idAula: 4, tituloAula: 'Funções e Modularização de Código', statusAula: 'fechada', urlVideo: 'URL_VIDEO_AULA_4', topicos: ['Funções', 'Escopo', 'Módulos'] },
    { idAula: 5, tituloAula: 'Introdução à Programação Orientada a Objetos', statusAula: 'concluída', urlVideo: 'URL_VIDEO_AULA_5', topicos: ['Classes', 'Objetos', 'Encapsulamento'] },
  ];

  public getAulas(): Aula[] {
    return this.aulas;
  }

  public getAulaById(id: number): Aula | null {
    this.getAulas();
    return this.aulas.find(aula => aula.idAula === id) || null;
  }
}