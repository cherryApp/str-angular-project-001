import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/common/product-card';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  topFiveFeaturedProducts: Product[] = this.productService.list.filter(product => product.featured)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  product = this.getCard(1);
  productsCategory = this.allProductsInCategory(1);
  featuredList = this.productService.list;

  /*   featuredList = this.allProductsInCategory(2); */
  productList: Product[] = this.productService.list;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }


  allProductsInCategory(catId: number): Product[] {
    return this.productService.list.filter(product => product.catId == catId);
  }

  fiveRandomProductsInCategory(catId: number): Product[] {
    return this.allProductsInCategory(catId)
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
  }

  getCard(id: number): ProductCard {
    const myCard = new ProductCard();
    const myProduct = this.productService.list.find(item => item.id == id);
    if (myProduct) {
      myCard.id = myProduct.id;
      myCard.author = myProduct.author;
      myCard.title = myProduct.title;
      myCard.description = myProduct.description;
      myCard.image = "assets/img/" + myProduct.image;
      myCard.price = myProduct.price;
      myCard.stock = myProduct.stock;
    };
    return myCard;
  }

  productsWithPath(method: Function, id: number): Product[] {
    const array: any = method(id);
    if (array)
      array.map(item => item.image = "assets/img/" + item.image);
    return array;
  }

}
