import { Injectable } from '@angular/core';
import { Product } from '../models/productmodel';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  selectedProduct: any

  url_api= `${environment.API_URL}/products`


  constructor(private http: HttpClient, private router: Router) { 
    this.selectedProduct = new Product()
  }

  getProducts(){
    return this.http.get(`${this.url_api}/get-products`)
  }
}
