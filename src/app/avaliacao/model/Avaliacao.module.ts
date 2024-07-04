import { Disciplina } from "src/app/pages/disciplinas/model/apostila.module";

export class Avaliacao {
    public idAvaliacao!: number;
    public nomeAvaliacao!: string;
    public notaAvaliacao!: number;
    public disciplina!: Disciplina; // Relacionamento com a disciplina correspondente
    public questoes!: Questao[];
    public status!: 'aberta' | 'fechada'; // Status da avaliação

    constructor(id:number, nomeAvaliacao: string, notaAvaliacao: number, disciplina: Disciplina, questoes: Questao[], status: 'aberta' | 'fechada') {
        this.idAvaliacao = id;
        this.nomeAvaliacao = nomeAvaliacao;
        this.notaAvaliacao = notaAvaliacao;
        this.disciplina = disciplina;
        this.questoes = questoes;
        this.status = status;
    }
}

export class Questao {
    public idQuestao!: number;
    public enunciado!: string;
    public respostas!: Resposta[];

    constructor(enunciado: string, respostas: Resposta[]) {
        this.enunciado = enunciado;
        this.respostas = respostas;
    }
}

export class Resposta {
    public idResposta!: number;
    public textoResposta!: string;
    public correta!: boolean;
    public selecionada!: boolean

    constructor(textoResposta: string, correta: boolean) {
        this.textoResposta = textoResposta;
        this.correta = correta;
        this.selecionada = false;
    }
}
