import { Component, Input, OnInit } from '@angular/core';
import { Apostila } from './model/apostila.module';
import { ApostilaService } from './adapter/ApostilaService';

@Component({
  selector: 'app-apostilas',
  templateUrl: './apostilas.component.html',
  styleUrls: ['./apostilas.component.css']
})
export class ApostilasComponent implements OnInit {

  @Input() public apostilas: Apostila[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
