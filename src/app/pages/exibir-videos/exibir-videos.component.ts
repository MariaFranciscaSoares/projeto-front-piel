import { Component, OnInit } from '@angular/core';
import { Video } from '../videos/model/video.module';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../videos/adapter/VideoService';

@Component({
  selector: 'app-exibir-videos',
  templateUrl: './exibir-videos.component.html',
  styleUrls: ['./exibir-videos.component.css']
})
export class ExibirVideosComponent implements OnInit {

  video!: Video | null;

  constructor(private route: ActivatedRoute, private videoService: VideoService) { }

  ngOnInit(): void {
    const videoId = this.route.snapshot.paramMap.get('id');
    if (videoId !== null) {
      const id = parseInt(videoId, 10); // Convertendo aulaId para número
      this.video = this.videoService.getVideoById(id);
    }

  }

}
