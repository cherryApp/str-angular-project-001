import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() kategoria1List:Product[];
  @Input() kategoria2List: Product[];
  
  productList$: Observable<Product[]> = this.productService.getAll(); 
  
 @Input() phraseString:string='';
  constructor(
    private productService: ProductService,    
  ) { }

  ngOnInit(): void {
  }
    




}