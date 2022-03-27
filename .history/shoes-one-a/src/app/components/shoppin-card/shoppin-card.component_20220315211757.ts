import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shoppin-card',
  templateUrl: './shoppin-card.component.html',
  styleUrls: ['./shoppin-card.component.css']
})
export class ShoppinCardComponent implements OnInit {

  constructor(public productService: ProductsService) {

   }

  ngOnInit(): void {
    this.productService.selectedProduct.shoppingCart('xd')
    console.log(this.productService.selectedProduct.shoppingCart)
  }

}
