import { Apostila } from "src/app/pages/apostilas/model/apostila.module";
import { Atividade } from "../../atividades/model/atividade.module";
import { Observable } from "rxjs";
import { Aula } from "../../aulas/model/aula.module";

export class Disciplina {
    public idDisciplina!: number;
    public nomeDisciplina!: string;
    public apostilaDisciplina!: Apostila[];
    public atividades!: Atividade[];
    public aulas!: Aula[];
    public nota!: number;
    public presenca!: number;
}