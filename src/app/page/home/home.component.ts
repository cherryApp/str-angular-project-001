import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productList: Product[] = this.productService.list;

  cat = 0;

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
  }

}
