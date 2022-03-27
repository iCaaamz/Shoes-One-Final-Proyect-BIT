import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-catalog1',
  templateUrl: './catalog1.component.html',
  styleUrls: ['./catalog1.component.css']
})
export class Catalog1Component implements OnInit {

  constructor(public ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.ProductsService.getProducts().subscribe(
      (Data:any)=>{
        this.ProductsService.selectedProduct=Data
        console.log(this.ProductsService.selectedProduct)
      }
    )
  }

  addToChart(product: any){

    let chart = localStorage.getItem('productsAdded') || '{}'

    //no hay nada en el carrito
    if (product && chart === '{}'){
      localStorage.setItem('productsAdded', `[${JSON.stringify(product)}]`)
      console.log(JSON.parse(chart))
    }

    //cuando hay 1 o mas elemntos
    if (product && chart !== '{}'){
      let tmp = JSON.parse(chart)
      tmp.push(product)
      localStorage.setItem('productsAdded',`[${JSON.stringify(tmp)}]`)
      console.log(tmp)
    }
  }

}
