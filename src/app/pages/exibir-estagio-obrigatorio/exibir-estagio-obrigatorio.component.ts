import { Component, OnInit } from '@angular/core';
import { EstagioService } from '../estagio/adapter/EstagioService';
import { Estagio } from '../estagio/model/estagio.module';

@Component({
  selector: 'app-exibir-estagio-obrigatorio',
  templateUrl: './exibir-estagio-obrigatorio.component.html',
  styleUrls: ['./exibir-estagio-obrigatorio.component.css']
})
export class ExibirEstagioObrigatorioComponent implements OnInit {

  estagiosObrigatorios: Estagio[] = [];

  constructor(private estagioService: EstagioService) { }

  ngOnInit(): void {
    this.getEstagiosObrigatorios();
  }

  getEstagiosObrigatorios(): void {
    this.estagioService.getEstagiosObrigatorios()
      .subscribe(estagios => this.estagiosObrigatorios = estagios);
  }

}
