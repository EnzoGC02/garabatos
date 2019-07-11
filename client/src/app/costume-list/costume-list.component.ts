import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costume-list',
  templateUrl: './costume-list.component.html',
  styleUrls: ['./costume-list.component.css']
})
export class CostumeListComponent implements OnInit {

  costumes:any=[];

  constructor() { }

  ngOnInit() {
    this.getCostumes();
  }

  getCostumes(){
    
    this.costumes=[{
      name:'paisana',
      description:'este disfraz se compone de partes individuales',
      precio_alq: 250,
      disponible:true,
      cantidad:5,
      image:'https://www.cotillonmarakas.com.ar/images/productos/big/3452.jpg'
    },
    {
      name:'spiderman',
      description:'este disfraz es un entero',
      precio_alq: 300,
      disponible:true,
      cantidad:2,
      image:'https://www.irepolis.com/images/productos/disfraz-adulto-hombre-arana-2-150.jpeg'
    }
  ]

  }

}
