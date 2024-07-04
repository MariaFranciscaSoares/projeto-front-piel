import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Artigo } from '../model/artigo.module';

@Injectable({
    providedIn: 'root'
})
export class ArtigoService {

    artigos!: Artigo[];

    constructor() { }


    getArtigos(): Observable<Artigo[]> {
        const artigos: Artigo[] = [
            {
                idArtigo: 1,
                tituloArtigo: 'Introdução Lógica de Programação',
                textoArtigo: introducaoLogicaProgramacao,
            },
            {
                idArtigo: 2,
                tituloArtigo: 'Diagramas de Banco de Dados',
                textoArtigo: 'Não perca a live "Acessibilidade e Tecnologia na Educação para Surdos", promovida pela Faculdade EAD Libras em parceria com especialistas na área de inclusão e tecnologia assistiva. O evento online, que será transmitido pelo canal da faculdade no YouTube, discutirá as melhores práticas e ferramentas tecnológicas para garantir uma educação inclusiva e de qualidade para estudantes surdos. Participe e contribua para a construção de um futuro mais acessível e igualitário para todos!',
            },
            {
                idArtigo: 3,
                tituloArtigo: 'Sistemas Operacionais',
                textoArtigo: 'Não perca a live "Acessibilidade e Tecnologia na Educação para Surdos", promovida pela Faculdade EAD Libras em parceria com especialistas na área de inclusão e tecnologia assistiva. O evento online, que será transmitido pelo canal da faculdade no YouTube, discutirá as melhores práticas e ferramentas tecnológicas para garantir uma educação inclusiva e de qualidade para estudantes surdos. Participe e contribua para a construção de um futuro mais acessível e igualitário para todos!',
            },
            {
                idArtigo: 4,
                tituloArtigo: 'Engenharia de Software',
                textoArtigo: 'Não perca a live "Acessibilidade e Tecnologia na Educação para Surdos", promovida pela Faculdade EAD Libras em parceria com especialistas na área de inclusão e tecnologia assistiva. O evento online, que será transmitido pelo canal da faculdade no YouTube, discutirá as melhores práticas e ferramentas tecnológicas para garantir uma educação inclusiva e de qualidade para estudantes surdos. Participe e contribua para a construção de um futuro mais acessível e igualitário para todos!',
            }, {
                idArtigo: 5,
                tituloArtigo: 'Estrutura de Dados',
                textoArtigo: 'Não perca a live "Acessibilidade e Tecnologia na Educação para Surdos", promovida pela Faculdade EAD Libras em parceria com especialistas na área de inclusão e tecnologia assistiva. O evento online, que será transmitido pelo canal da faculdade no YouTube, discutirá as melhores práticas e ferramentas tecnológicas para garantir uma educação inclusiva e de qualidade para estudantes surdos. Participe e contribua para a construção de um futuro mais acessível e igualitário para todos!',
            }
        ];

        this.artigos = artigos;

        return of(artigos);
    }

    getByArtigos(id: number): Artigo | null {
        this.getArtigos();
        return this.artigos.find(artigo => artigo.idArtigo === id) || null;
    }

}

export const introducaoLogicaProgramacao: string = `
Introdução à Lógica de Programação: Fundamentos para Desenvolvedores

A lógica de programação é uma disciplina essencial para qualquer pessoa que deseje se aventurar no mundo da tecnologia. Ela é a base sobre a qual os programas de computador são construídos, permitindo aos desenvolvedores resolverem problemas de forma estruturada e eficiente.

O que é Lógica de Programação?
A lógica de programação é a habilidade de criar algoritmos para resolver problemas. Um algoritmo é uma sequência de passos finitos e precisos, que, quando seguidos corretamente, levam à solução de um problema específico.

Princípios Básicos
Os principais princípios da lógica de programação incluem sequencialidade, estrutura de controle, reutilização de código, abstração e modularidade. Esses conceitos fundamentais são essenciais para escrever código claro, eficiente e fácil de manter.

Sequencialidade
A sequencialidade refere-se à execução das instruções em ordem sequencial, uma após a outra. Cada instrução é executada na ordem em que aparece no algoritmo, sem desvios ou saltos.

Estrutura de Controle
A estrutura de controle permite que o programa altere seu fluxo de execução com base em certas condições. Isso inclui instruções de decisão, como "se-então-senão" e loops, que permitem que o programa repita a execução de determinadas instruções.

Reutilização de Código
A reutilização de código é uma prática fundamental na programação, que envolve escrever blocos de código que podem ser usados várias vezes em um programa. Isso ajuda a reduzir a duplicação de código e facilita a manutenção e a atualização do software.

Abstração
A abstração envolve a capacidade de simplificar um problema complexo, concentrando-se nos aspectos mais importantes e ignorando os detalhes irrelevantes. Isso é feito por meio da criação de funções e procedimentos que encapsulam a lógica específica do problema.

Modularidade
A modularidade é o princípio de dividir um programa em módulos ou componentes independentes, cada um responsável por uma parte específica do funcionamento do software. Isso facilita a organização e a manutenção do código, além de promover a reutilização e a colaboração entre desenvolvedores.

Conclusão
Em resumo, a lógica de programação é uma habilidade fundamental para qualquer pessoa interessada em programação. Dominar os princípios básicos da lógica de programação é essencial para escrever código claro, eficiente e fácil de manter. Portanto, dedique tempo para praticar e aprimorar suas habilidades de lógica de programação, pois elas serão a base para sua jornada como desenvolvedor de software.
Introdução à Lógica de Programação: Fundamentos para Desenvolvedores

A lógica de programação é uma disciplina essencial para qualquer pessoa que deseje se aventurar no mundo da tecnologia. Ela é a base sobre a qual os programas de computador são construídos, permitindo aos desenvolvedores resolverem problemas de forma estruturada e eficiente.

O que é Lógica de Programação?
A lógica de programação é a habilidade de criar algoritmos para resolver problemas. Um algoritmo é uma sequência de passos finitos e precisos, que, quando seguidos corretamente, levam à solução de um problema específico.

Princípios Básicos
Os principais princípios da lógica de programação incluem sequencialidade, estrutura de controle, reutilização de código, abstração e modularidade. Esses conceitos fundamentais são essenciais para escrever código claro, eficiente e fácil de manter.

Sequencialidade
A sequencialidade refere-se à execução das instruções em ordem sequencial, uma após a outra. Cada instrução é executada na ordem em que aparece no algoritmo, sem desvios ou saltos.

Estrutura de Controle
A estrutura de controle permite que o programa altere seu fluxo de execução com base em certas condições. Isso inclui instruções de decisão, como "se-então-senão" e loops, que permitem que o programa repita a execução de determinadas instruções.

Reutilização de Código
A reutilização de código é uma prática fundamental na programação, que envolve escrever blocos de código que podem ser usados várias vezes em um programa. Isso ajuda a reduzir a duplicação de código e facilita a manutenção e a atualização do software.

Abstração
A abstração envolve a capacidade de simplificar um problema complexo, concentrando-se nos aspectos mais importantes e ignorando os detalhes irrelevantes. Isso é feito por meio da criação de funções e procedimentos que encapsulam a lógica específica do problema.

Modularidade
A modularidade é o princípio de dividir um programa em módulos ou componentes independentes, cada um responsável por uma parte específica do funcionamento do software. Isso facilita a organização e a manutenção do código, além de promover a reutilização e a colaboração entre desenvolvedores.

Conclusão
Em resumo, a lógica de programação é uma habilidade fundamental para qualquer pessoa interessada em programação. Dominar os princípios básicos da lógica de programação é essencial para escrever código claro, eficiente e fácil de manter. Portanto, dedique tempo para praticar e aprimorar suas habilidades de lógica de programação, pois elas serão a base para sua jornada como desenvolvedor de software.Introdução à Lógica de Programação: Fundamentos para Desenvolvedores

A lógica de programação é uma disciplina essencial para qualquer pessoa que deseje se aventurar no mundo da tecnologia. Ela é a base sobre a qual os programas de computador são construídos, permitindo aos desenvolvedores resolverem problemas de forma estruturada e eficiente.

O que é Lógica de Programação?
A lógica de programação é a habilidade de criar algoritmos para resolver problemas. Um algoritmo é uma sequência de passos finitos e precisos, que, quando seguidos corretamente, levam à solução de um problema específico.

Princípios Básicos
Os principais princípios da lógica de programação incluem sequencialidade, estrutura de controle, reutilização de código, abstração e modularidade. Esses conceitos fundamentais são essenciais para escrever código claro, eficiente e fácil de manter.

Sequencialidade
A sequencialidade refere-se à execução das instruções em ordem sequencial, uma após a outra. Cada instrução é executada na ordem em que aparece no algoritmo, sem desvios ou saltos.

Estrutura de Controle
A estrutura de controle permite que o programa altere seu fluxo de execução com base em certas condições. Isso inclui instruções de decisão, como "se-então-senão" e loops, que permitem que o programa repita a execução de determinadas instruções.

Reutilização de Código
A reutilização de código é uma prática fundamental na programação, que envolve escrever blocos de código que podem ser usados várias vezes em um programa. Isso ajuda a reduzir a duplicação de código e facilita a manutenção e a atualização do software.

Abstração
A abstração envolve a capacidade de simplificar um problema complexo, concentrando-se nos aspectos mais importantes e ignorando os detalhes irrelevantes. Isso é feito por meio da criação de funções e procedimentos que encapsulam a lógica específica do problema.

Modularidade
A modularidade é o princípio de dividir um programa em módulos ou componentes independentes, cada um responsável por uma parte específica do funcionamento do software. Isso facilita a organização e a manutenção do código, além de promover a reutilização e a colaboração entre desenvolvedores.

Conclusão
Em resumo, a lógica de programação é uma habilidade fundamental para qualquer pessoa interessada em programação. Dominar os princípios básicos da lógica de programação é essencial para escrever código claro, eficiente e fácil de manter. Portanto, dedique tempo para praticar e aprimorar suas habilidades de lógica de programação, pois elas serão a base para sua jornada como desenvolvedor de software.
`;