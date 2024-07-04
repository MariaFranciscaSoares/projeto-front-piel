import { Component, OnInit } from '@angular/core';
import { Aula } from '../aulas/model/aula.module';
import { ActivatedRoute, Router } from '@angular/router';
import { AulaService } from '../aulas/adapter/AulaService';

@Component({
  selector: 'app-exibir-aula',
  templateUrl: './exibir-aula.component.html',
  styleUrls: ['./exibir-aula.component.css']
})
export class ExibirAulaComponent implements OnInit {

  aula!: Aula | null;
  urlVideo = '\assets\videos\teste.mp4';

  curiosidades: string = '/assets/imagens/curiosidades.png';
  topicos!: string[];

  constructor(private route: ActivatedRoute, private aulaService: AulaService, private router: Router) { }

  ngOnInit(): void {
    this.setAula();
  }

  private setAula(): void {
    const aulaId = this.route.snapshot.paramMap.get('id');
    if (aulaId !== null) {
      const id = parseInt(aulaId, 10);
      this.aula = this.aulaService.getAulaById(id);
      if (this.aula) {
        this.topicos = this.aula.topicos;
      } else {
        console.error(`Aula com ID ${id} não encontrada.`);
      }
    } else {
      console.error('ID da aula não fornecido.');
    }
  }

  protected backAulas(): void {
    this.router.navigate(['/aulas']);
  }
}
