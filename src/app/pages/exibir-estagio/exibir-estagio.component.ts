import { Component, OnInit } from '@angular/core';
import { Estagio } from '../estagio/model/estagio.module';
import { EstagioService } from '../estagio/adapter/EstagioService';

@Component({
  selector: 'app-exibir-estagio',
  templateUrl: './exibir-estagio.component.html',
  styleUrls: ['./exibir-estagio.component.css']
})
export class ExibirEstagioComponent implements OnInit {

  estagios: Estagio[] = [];

  constructor(private estagioService: EstagioService) { }

  ngOnInit(): void {
    this.getEstagios();
  }

  getEstagios(): void {
    this.estagioService.getEstagios()
      .subscribe(estagios => this.estagios = estagios);
  }


}
