import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.page.html',
  styleUrls: ['./ejercicio7.page.scss'],
})
export class Ejercicio7Page implements OnInit {
  pese:number = 0;
  eur:number = 0;

  constructor() { }

  ngOnInit() {
    this.eur = this.pese*2;
  }

}
