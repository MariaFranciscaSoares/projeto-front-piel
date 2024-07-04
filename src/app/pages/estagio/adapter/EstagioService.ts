import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Estagio } from '../model/estagio.module';

@Injectable({
    providedIn: 'root'
})
export class EstagioService {

    constructor() { }
    // Retorna dados mockados de estágios
    getEstagios(): Observable<Estagio[]> {
        const estagios: Estagio[] = [
            {
                id: 1,
                nome: 'Estagiário 1',
                empresa: 'Empresa A',
                descricao: 'Descrição do estágio 1',
                cargaHoraria: '30 horas semanais',
                tecnologia: 'Angular, HTML, CSS',
                requisitos: 'Conhecimento básico em programação'
            },
            {
                id: 2,
                nome: 'Estagiário 2',
                empresa: 'Empresa B',
                descricao: 'Descrição do estágio 2',
                cargaHoraria: '20 horas semanais',
                tecnologia: 'React, JavaScript',
                requisitos: 'Experiência com desenvolvimento web'
            },
            {
                id: 3,
                nome: 'Estagiário 3',
                empresa: 'Empresa C',
                descricao: 'Descrição do estágio 3',
                cargaHoraria: '40 horas semanais',
                tecnologia: 'Vue.js, TypeScript',
                requisitos: 'Conhecimento avançado em front-end'
            }
        ];

        return of(estagios);
    }
    
    getEstagiosObrigatorios(): Observable<Estagio[]> {
        const estagiosObrigatorios: Estagio[] = [
          {
            id: 1,
            nome: 'Estagiário 1',
            empresa: 'Empresa A',
            descricao: 'Descrição do estágio 1',
            cargaHoraria: '30 horas semanais',
            tecnologia: 'Angular, HTML, CSS',
            requisitos: 'Conhecimento básico em programação'
          }
        ];
    
        return of(estagiosObrigatorios);
      }
}