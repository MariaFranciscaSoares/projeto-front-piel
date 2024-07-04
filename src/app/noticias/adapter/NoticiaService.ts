import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Noticia } from '../model/noticia.module';

@Injectable({
    providedIn: 'root'
})
export class NoticiasService {

    constructor() { }

    getNoticias(): Observable<Noticia[]> {
        const noticias: Noticia[] = [
            {
                idNoticia: 1,
                tituloNoticia: 'Faculdade EAD lança curso de Libras para inclusão de surdos',
                textoNoticia: 'A Faculdade EAD Libras, comprometida com a inclusão e acessibilidade, acaba de lançar um novo curso de Libras (Língua Brasileira de Sinais), voltado para a capacitação de profissionais na área de educação e atendimento a surdos.',
                img: '/assets/imagens/noticia_1.jpeg'
            },
            {
                idNoticia: 2,
                tituloNoticia: 'Live sobre acessibilidade e tecnologia na educação para surdos',
                textoNoticia: 'Não perca a live "Acessibilidade e Tecnologia na Educação para Surdos", promovida pela Faculdade EAD Libras em parceria com especialistas na área de inclusão e tecnologia assistiva.',
                img: '/assets/imagens/acessibilidade-em-eventos.jpg'
            },
            {
                idNoticia: 3,
                tituloNoticia: 'Inovações em Tecnologia de Tradução de Libras',
                textoNoticia: 'Recentemente, avanços significativos foram feitos na tecnologia de tradução de Língua Brasileira de Sinais (Libras), facilitando a comunicação para surdos.',
                img: '/assets/imagens/noticia_3.jpeg'
            },
        ];

        return of(noticias);
    }
}

