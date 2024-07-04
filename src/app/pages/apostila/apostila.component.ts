import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apostila } from '../apostilas/model/apostila.module';
import { ApostilaService } from '../apostilas/adapter/ApostilaService';

@Component({
  selector: 'app-apostila',
  templateUrl: './apostila.component.html',
  styleUrls: ['./apostila.component.css']
})
export class ApostilaComponent implements OnInit {

  apostila!: Apostila | null;

  constructor(private route: ActivatedRoute, private apostilaService: ApostilaService, private router: Router) { }

  ngOnInit(): void {
    this.getApostila();
  }

  private getApostila(): void {
    const videoId = this.route.snapshot.paramMap.get('id');
    if (videoId !== null) {
      const id = parseInt(videoId, 10); // Convertendo aulaId para número
      this.apostila = this.apostilaService.getByApostila(id);
    }
  }

  protected backOptionMateriais(): void {
    this.router.navigate(['/materiais']);
  }
}
