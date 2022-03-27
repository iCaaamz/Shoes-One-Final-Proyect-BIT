import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppin-card',
  templateUrl: './shoppin-card.component.html',
  styleUrls: ['./shoppin-card.component.css']
})
export class ShoppinCardComponent implements OnInit {

  shoppingCard = []

  constructor() {

   }

  ngOnInit(): void {
    this.shoppingCard = JSON.parse(localStorage.getItem('productsAdded') || '[]')
  }

}
