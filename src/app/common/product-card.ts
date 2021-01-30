import { AppComponent } from "../app.component";
import { ProductService } from "../service/product.service";

export class ProductCard {
         id: number;
         author: string;
         title: string;
         description: string;
         price: number;
         stock: number;
        
 constructor(properties?: ProductCard) { 
     if(properties) {
         this.id = properties.id;
         this.author = properties.author;
         this.title = properties.title;
         this.description = properties.description;
            this.price = properties.price;
         this.stock = properties.stock;
     }
    }
/* productList: Product[] = this.productService.list;

 constructor(id: number, productService: ProductService) { 
     this.id = id;

         
         this.author = properties.author;
         this.title = properties.title;
         this.description = properties.description;
         this.price = properties.price;
         this.stock = properties.stock;

     
}
getCardData(id: number): ProductCard {
let card = productList.find(item)
}
 */
}
