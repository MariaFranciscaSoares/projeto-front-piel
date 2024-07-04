import { Component, OnInit } from '@angular/core';
import { ArtigoService } from 'src/app/artigos/adapter/ArtigoService';
import { Artigo } from 'src/app/artigos/model/artigo.module';
import { Apostila } from '../apostilas/model/apostila.module';
import { ApostilaService } from '../apostilas/adapter/ApostilaService';

@Component({
  selector: 'app-materiais',
  templateUrl: 'materiais.component.html',
  styleUrls: ['./materiais.component.css']
})
export class MateriaisComponent implements OnInit {

  protected artigos: Artigo[] = [];
  protected artigosFiltrados: Artigo[] = [];
  protected apostilas: Apostila[] = [];
  protected apostilasFiltrados: Apostila[] = [];
  protected tituloPesquisado: string = '';

  protected logoArtigo: string = '/assets/imagens/logoArtigo.png';

  constructor(private artigoService: ArtigoService, private apostilaService: ApostilaService) { }

  ngOnInit(): void {
    this.getArtigos();
    this.getApostilas();
  }

  private getArtigos(): void {
    this.artigoService.getArtigos()
      .subscribe(artigos => this.artigos = artigos);
  }

  private getApostilas(): void {
    this.apostilaService.getApostilas()
      .subscribe(apostilas => this.apostilas = apostilas);
  }

  protected filtrar(): void {
    this.filtroArtigos();
    this.filtroApostilas();
  }

  private filtroArtigos(): void {
    if (!this.tituloPesquisado) {
      this.getArtigos();
    } else {
      this.artigosFiltrados = this.artigos.filter(artigo =>
        artigo.tituloArtigo.toLowerCase().includes(this.tituloPesquisado.toLowerCase())
      );

      this.artigos = this.artigosFiltrados;
    }
  }

  private filtroApostilas(): void {
    if (!this.tituloPesquisado) {
      this.getApostilas();
    } else {
      this.apostilasFiltrados = this.apostilas.filter(apostila =>
        apostila.tituloApostila.toLowerCase().includes(this.tituloPesquisado.toLowerCase())
      );

      this.apostilas = this.apostilasFiltrados;
    }
  }
}

