export interface CalendarioDia {
    dia: number;
    mes: number;
    ano: number;
    finalSemana: boolean;
    diaProva: boolean;
    inicioAula: boolean;
    terminoAula: boolean;
}

export class CalendarioDiaImpl implements CalendarioDia {
    constructor(
        public dia: number = 0,
        public mes: number = 0,
        public ano: number = 0,
        public finalSemana: boolean = false,
        public diaProva: boolean = false,
        public inicioAula: boolean = false,
        public terminoAula: boolean = false
    ) { }
}

export interface CalendarioMes {
    nome: string;
    semanas: CalendarioDia[][];
}