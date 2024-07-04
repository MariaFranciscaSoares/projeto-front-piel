import { Component, OnInit } from '@angular/core';
import { Noticia } from './model/noticia.module';
import { NoticiasService } from './adapter/NoticiaService';
import { CalendarioDia, CalendarioMes } from '../pages/agenda/model/CalendarioDia.module';
import { CalendarioService } from '../pages/agenda/adapter/CalendarioService';

@Component({
  selector: 'app-noticias',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  noticias: Noticia[] = [];

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this.getNoticias();
  }

  private getNoticias(): void {
    this.noticiasService.getNoticias()
      .subscribe(noticias => this.noticias = noticias);
  }

}
