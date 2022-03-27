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
    console.log({product})
  }

}
