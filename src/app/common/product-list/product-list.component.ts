import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    @Input() products: Product[] = []

    constructor(private product: Product) {}

    ngOnInit(): void {
        this.product.getProducts().then((products: Product[]) => {
            this.products = products
        })
    }
}