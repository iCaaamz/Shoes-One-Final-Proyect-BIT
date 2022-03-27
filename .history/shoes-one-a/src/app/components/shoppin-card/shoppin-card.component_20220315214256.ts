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
    this.productService.selectedProduct.shoppingCart = JSON.parse(localStorage.getItem('productsAdded') || '[]')
    console.log(this.productService.selectedProduct.shoppingCart)
  }

  priceSum(array: any){
    let total = 0
    for(let product of array) total += product.price 
    return total
  }

  deleteOfChart(index: number){
    let tmp = JSON.parse(localStorage.getItem('productsAdded') || '[]')

    if(index > -1){
      tmp.splice(index, 1)
      localStorage.setItem('productsAdded', `${JSON.stringify(tmp)}`)
      this.productService.selectedProduct.shoppingCart = JSON.parse(localStorage.getItem('productsAdded') || '[]')
    }



  }

}
