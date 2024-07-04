import { Injectable } from '@angular/core'; import { Video } from '../model/video.module';
import { Observable, of } from 'rxjs';
;


@Injectable({
    providedIn: 'root'
})
export class VideoService {

    videos!: Video[];

    constructor() { }

    getVideo(): Observable<Video[]> {
        const videos: Video[] = [
            {
                id: 1,
                nome: 'Introdução Libras',
            },
            {
                id: 2,
                nome: 'Lógica de Programação',
            },
            {
                id: 3,
                nome: 'Curiosidadess',
            }
        ];

        this.videos = videos;

        return of(videos);
    }

    getVideoById(id: number): Video | null {
        this.getVideo();
        return this.videos.find(video => video.id === id) || null;
    }

}