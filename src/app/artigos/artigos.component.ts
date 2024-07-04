import { Component, Input, OnInit } from '@angular/core';
import { ArtigoService } from './adapter/ArtigoService';
import { Artigo } from './model/artigo.module';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.css']
})
export class ArtigosComponent implements OnInit {

  @Input() public artigos: Artigo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
