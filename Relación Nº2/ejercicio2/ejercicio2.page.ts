import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.page.html',
  styleUrls: ['./ejercicio2.page.scss'],
})
export class Ejercicio2Page implements OnInit {
  contador:number;
  nombre:String

  constructor() { }

  ngOnInit() {
    this.nombre = "Miguel Gutiérrez"
    this.contador = 0;
  }
  clickListener():void{
    this.contador ++;
  }

}
