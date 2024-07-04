import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtigoService } from 'src/app/artigos/adapter/ArtigoService';
import { Artigo } from 'src/app/artigos/model/artigo.module';

@Component({
  selector: 'app-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css']
})
export class ArtigoComponent implements OnInit {

  protected artigo!: Artigo | null;

  constructor(private route: ActivatedRoute, private artigoService: ArtigoService, private router: Router) { }

  ngOnInit(): void {
    this.getArtigo();
  }

  private getArtigo(): void {
    const videoId = this.route.snapshot.paramMap.get('id');
    if (videoId !== null) {
      const id = parseInt(videoId, 10);
      this.artigo = this.artigoService.getByArtigos(id);
    }
  }

  protected backOptionMateriais(): void {
    this.router.navigate(['/materiais']);
  }
}
