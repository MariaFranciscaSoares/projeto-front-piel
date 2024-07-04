import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Atividade } from '../model/atividade.module';

@Injectable({
    providedIn: 'root'
})
export class AtividadeService {

    private atividades: Atividade[] = [
        {
            idAtividade: 1,
            tituloAtividade: 'Introdução aos Conceitos Básicos de Programação',
            statusAtividade: 'aberta',
            descricaoAtividade: 'Leia o material fornecido sobre os conceitos básicos de programação e responda às seguintes perguntas em um arquivo de texto. Envie o arquivo respondido como anexo nesta atividade.'
        },
        {
            idAtividade: 2,
            tituloAtividade: 'Estruturas de Controle: Decisões e Repetições',
            statusAtividade: 'aberta',
            descricaoAtividade: 'Realize os exercícios de programação fornecidos para praticar as estruturas de controle de fluxo. Documente sua solução em um arquivo de código-fonte e envie-o como anexo nesta atividade.'
        },
        {
            idAtividade: 3,
            tituloAtividade: 'Manipulação de Dados: Variáveis e Tipos de Dados',
            statusAtividade: 'aberta',
            descricaoAtividade: 'Desenvolva um pequeno programa que manipule variáveis e tipos de dados em uma linguagem de programação de sua escolha. Envie o código-fonte do programa como anexo nesta atividade.'
        },
        {
            idAtividade: 4,
            tituloAtividade: 'Funções e Modularização de Código',
            statusAtividade: 'concluida',
            descricaoAtividade: 'Implemente uma função que resolva um problema específico de programação. Comente seu código adequadamente e envie-o como anexo nesta atividade.'
        },
        {
            idAtividade: 5,
            tituloAtividade: 'Introdução à Programação Orientada a Objetos',
            statusAtividade: 'concluida',
            descricaoAtividade: 'Estude os princípios básicos da programação orientada a objetos (POO) e implemente uma classe simples em uma linguagem de programação que suporte POO. Envie o código-fonte da classe como anexo nesta atividade.'
        }
    ];

    constructor() { }

    public getAtividades(): Atividade[] {
        return this.atividades;
    }

    public getAtividadeById(id: number): Atividade | null {
        this.getAtividades();
        return this.atividades.find(atividade => atividade.idAtividade === id) || null;
    }

    public concluirAtividade(idAtividade: number | undefined): void {
        const atividade = this.atividades.find(atv => atv.idAtividade === idAtividade);
        if (atividade) {
            atividade.statusAtividade = 'concluida';
        }
    }
}