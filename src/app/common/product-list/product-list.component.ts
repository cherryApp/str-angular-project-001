import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../model/product';
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    products: Product[] = []

    constructor(private product: Product) {}

    ngOnInit(): void {
        this.product.getProducts().then((products: Product[]) => {
            this.products = products
        })
    }
}