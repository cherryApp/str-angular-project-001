import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-product-paging',
  templateUrl: './product-paging.component.html',
  styleUrls: ['./product-paging.component.scss']
})
export class ProductPagingComponent implements OnInit {

  @Input() featuredList: Product[] = this.productService.fiveRandomProductsInCategory(1);


  @Input() product: Product;



  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }



}
