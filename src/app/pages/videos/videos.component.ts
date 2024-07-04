import { Component, OnInit } from '@angular/core';
import { Video } from './model/video.module';
import { VideoService } from './adapter/VideoService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: VideoService, private router: Router) { }

  logoVideo: string = '/assets/imagens/logoVideo.png';

  videos: Video[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.getVideo().subscribe(videos => {
        this.videos = videos;
      });
    });
  }
}
