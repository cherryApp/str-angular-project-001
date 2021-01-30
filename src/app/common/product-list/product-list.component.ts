import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from '../../service/product-service';
import { ProductCardComponent } from './product-card/product-card.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() kategoria1:Product[];
  @Input() phraseString: string = '';
  

  productList: Product[] = this.productService.list;  

  constructor(
    private productService: ProductService,    
  ) { }

  ngOnInit(): void {
  }
    
}