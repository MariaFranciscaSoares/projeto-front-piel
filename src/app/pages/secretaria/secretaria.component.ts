import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  secretaria: string = '/assets/imagens/secretaria.png';
  diretoria: string = '/assets/imagens/diretoria.png';
}
