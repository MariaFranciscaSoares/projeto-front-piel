import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estagio',
  templateUrl: './estagio.component.html',
  styleUrls: ['./estagio.component.css']
})
export class EstagioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  estagio: string = '/assets/imagens/estagio.png';
  estagioObrigatorio: string = '/assets/imagens/estagioObrigatorio.png';

}
