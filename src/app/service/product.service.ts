import { Injectable } from '@angular/core';
import { ProductCard } from '../common/product-card';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // catId: number;
  list: Product[] = [
    { id: 1, catId: 4, title: "Stay", author: "Raynor Besson", description: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.", image: "1.png", price: 8239, stock: 7, featured: true, active: true, action: true },
    { id: 2, catId: 5, title: "Stratton Story, The", author: "Harv Beardwood", description: "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.", image: "2.png", price: 6420, stock: 4, featured: true, active: true, action: true },
    { id: 3, catId: 5, title: "Why Not? (Eijanaika)", author: "Fonz Teas", description: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.", image: "3.png", price: 5528, stock: 1, featured: false, active: true, action: false },
    { id: 4, catId: 2, title: "Dr. Dolittle 3", author: "Leanor Petersen", description: "Suspendisse ornare consequat lectus.", image: "4.png", price: 4835, stock: 4, featured: true, active: true, action: true },
    { id: 5, catId: 1, title: "Mine Games", author: "Alana McBeith", description: "Curabitur in libero ut massa volutpat convallis.", image: "5.png", price: 3886, stock: 3, featured: false, active: true, action: true },
    { id: 6, catId: 4, title: "Garden Lovers (Eedenistä pohjoiseen)", author: "Ewen Dabel", description: "Nunc rhoncus dui vel sem.", image: "6.png", price: 9647, stock: 1, featured: true, active: false, action: true },
    { id: 7, catId: 4, title: "The Trip to Squash Land", author: "Kirbee Jersh", description: "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.", image: "7.png", price: 3176, stock: 3, featured: true, active: true, action: true },
    { id: 8, catId: 5, title: "Tale of Ham and Passion, A (Jamón, Jamón)", author: "Joshuah Gladebeck", description: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.", image: "8.png", price: 6621, stock: 7, featured: false, active: true, action: true },
    { id: 9, catId: 5, title: "Superman/Shazam!: The Return of Black Adam (DC Showcase Original Shorts Collection)", author: "Tait Conkay", description: "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.", image: "9.png", price: 8167, stock: 9, featured: true, active: true, action: false },
    { id: 10, catId: 2, title: "Beauty and the Beast", author: "Thorin Story", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.", image: "10.png", price: 3602, stock: 4, featured: true, active: true, action: true },
    { id: 11, catId: 5, title: "Naked Gun: From the Files of Police Squad!, The", author: "Stan Gallanders", description: "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.", image: "11.png", price: 7245, stock: 9, featured: false, active: true, action: true },
    { id: 12, catId: 4, title: "Lover, The (Amant, L')", author: "Phaidra De Lisle", description: "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.", image: "12.png", price: 3352, stock: 7, featured: true, active: true, action: true },
    { id: 13, catId: 1, title: "Bringing Out the Dead", author: "Susanne Kiera", description: "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.", image: "13.png", price: 7368, stock: 10, featured: true, active: true, action: false },
    { id: 14, catId: 2, title: "Sunset Blvd. (a.k.a. Sunset Boulevard)", author: "Edgardo Noen", description: "Integer ac neque. Duis bibendum.", image: "14.png", price: 6018, stock: 8, featured: false, active: true, action: true },
    { id: 15, catId: 3, title: "Sydney White", author: "North Colt", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.", image: "15.png", price: 9752, stock: 5, featured: false, active: true, action: true },
    { id: 16, catId: 1, title: "The Elephant Man", author: "Armand Nourse", description: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.", image: "16.png", price: 3050, stock: 8, featured: true, active: true, action: false },
    { id: 17, catId: 2, title: "A Most Violent Year", author: "Britney Carff", description: "Nam nulla.", image: "17.png", price: 6438, stock: 2, featured: true, active: true, action: true },
    { id: 18, catId: 4, title: "Fun with Dick and Jane", author: "Angelina Hofner", description: "Nulla ac enim.", image: "18.png", price: 2728, stock: 10, featured: true, active: false, action: true },
    { id: 19, catId: 4, title: "I Live in Fear (Ikimono no kiroku)", author: "Vaughan Slessar", description: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.", image: "19.png", price: 9877, stock: 1, featured: true, active: true, action: false },
    { id: 20, catId: 4, title: "Stargate: Continuum", author: "Muriel Fodden", description: "Vestibulum rutrum rutrum neque.", image: "20.png", price: 8495, stock: 9, featured: true, active: true, action: true },
    { id: 21, catId: 1, title: "Bridget Jones: The Edge of Reason", author: "Sidonia Penley", description: "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.", image: "21.png", price: 4752, stock: 4, featured: false, active: false, action: true },
    { id: 22, catId: 4, title: "Lasa y Zabala", author: "Sayre Dransfield", description: "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.", image: "22.png", price: 9335, stock: 3, featured: true, active: true, action: false },
    { id: 23, catId: 4, title: "Tomb, The", author: "Boothe Hiom", description: "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.", image: "23.png", price: 8557, stock: 9, featured: false, active: true, action: false },
    { id: 24, catId: 2, title: "House Is Black, The", author: "Yasmin Ruttgers", description: "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.", image: "24.png", price: 5791, stock: 1, featured: true, active: false, action: false },
    { id: 25, catId: 5, title: "Edges of the Lord", author: "Grace Bartlosz", description: "Etiam justo.", image: "25.png", price: 7724, stock: 6, featured: true, active: true, action: true },
    { id: 26, catId: 2, title: "Jacket, The", author: "Howard Slee", description: "Phasellus in felis. Donec semper sapien a libero.", image: "26.png", price: 5297, stock: 4, featured: false, active: false, action: false },
    { id: 27, catId: 3, title: "Living in Oblivion", author: "Carlyle Stilliard", description: "Pellentesque at nulla. Suspendisse potenti.", image: "27.png", price: 5037, stock: 2, featured: true, active: false, action: false },
    { id: 28, catId: 1, title: "Merrily We Live", author: "Pierette Rosie", description: "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.", image: "28.png", price: 9309, stock: 8, featured: true, active: true, action: false },
    { id: 29, catId: 1, title: "Four Seasons (Seasons, The) (Vremena goda)", author: "Ally Routley", description: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.", image: "29.png", price: 7039, stock: 5, featured: true, active: true, action: true },
    { id: 30, catId: 2, title: "Phantasm II", author: "Sharline Roggers", description: "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.", image: "30.png", price: 9935, stock: 10, featured: false, active: false, action: false },
    { id: 31, catId: 1, title: "Aces: Iron Eagle III", author: "Claus Klewer", description: "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.", image: "31.png", price: 4695, stock: 4, featured: true, active: true, action: false },
    { id: 32, catId: 2, title: "Expelled", author: "Adolph Grose", description: "Etiam pretium iaculis justo. In hac habitasse platea dictumst.", image: "32.png", price: 2680, stock: 0, featured: true, active: true, action: false },
    { id: 33, catId: 1, title: "South of Heaven, West of Hell", author: "Cullan Kirkup", description: "In congue. Etiam justo.", image: "33.png", price: 5612, stock: 10, featured: true, active: false, action: false },
    { id: 34, catId: 1, title: "Message to Garcia, A", author: "Ranice Leve", description: "Nulla nisl. Nunc nisl.", image: "34.png", price: 3813, stock: 9, featured: false, active: true, action: true },
    { id: 35, catId: 1, title: "Rebel Without a Cause", author: "Bennett Mulvihill", description: "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.", image: "35.png", price: 2444, stock: 5, featured: true, active: true, action: false },
    { id: 36, catId: 3, title: "Primal Fear", author: "Even Lagen", description: "Sed accumsan felis. Ut at dolor quis odio consequat varius.", image: "36.png", price: 3227, stock: 0, featured: true, active: true, action: true },
    { id: 37, catId: 1, title: "Power of Kangwon Province, The (Kangwon-do ui him)", author: "Asia Males", description: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.", image: "37.png", price: 5874, stock: 8, featured: true, active: false, action: true },
    { id: 38, catId: 1, title: "The Great Scout & Cathouse Thursday", author: "Vannie Weatherill", description: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.", image: "38.png", price: 9621, stock: 2, featured: false, active: true, action: true },
    { id: 39, catId: 3, title: "Don", author: "Bernelle Annon", description: "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.", image: "39.png", price: 2897, stock: 2, featured: true, active: false, action: false },
    { id: 40, catId: 1, title: "Nömadak TX", author: "Jamie Simoncelli", description: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.", image: "40.png", price: 6575, stock: 10, featured: false, active: false, action: true },
    { id: 41, catId: 3, title: "Freedom Song", author: "Jacintha Lockhurst", description: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.", image: "41.png", price: 4851, stock: 9, featured: false, active: true, action: true },
    { id: 42, catId: 5, title: "Moon Zero Two", author: "Fleur Sutor", description: "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.", image: "42.png", price: 8288, stock: 3, featured: false, active: true, action: true },
    { id: 43, catId: 1, title: "Traveler, The", author: "Orson Hassett", description: "Maecenas ut massa quis augue luctus tincidunt.", image: "43.png", price: 3745, stock: 5, featured: false, active: true, action: false },
    { id: 44, catId: 3, title: "Girl of Finland (Lapualaismorsian)", author: "Patrick Bickers", description: "Praesent blandit lacinia erat.", image: "44.png", price: 8341, stock: 2, featured: false, active: false, action: false },
    { id: 45, catId: 5, title: "Dead of Night", author: "Ambur Springate", description: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.", image: "45.png", price: 9684, stock: 4, featured: false, active: false, action: false },
    { id: 46, catId: 3, title: "Rendez-vous d'Anna, Les (Meetings of Anna, The)", author: "Merrilee Coghill", description: "Vivamus in felis eu sapien cursus vestibulum.", image: "46.png", price: 8945, stock: 1, featured: false, active: false, action: true },
    { id: 47, catId: 1, title: "I Am Ali", author: "Gardener Mackriell", description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.", image: "47.png", price: 2119, stock: 7, featured: true, active: false, action: true },
    { id: 48, catId: 1, title: "Farewell to the King", author: "Wright Raspin", description: "Nulla facilisi. Cras non velit nec nisi vulputate nonummy.", image: "48.png", price: 5501, stock: 8, featured: false, active: false, action: true },
    { id: 49, catId: 1, title: "Day Watch (Dnevnoy dozor)", author: "Erinn Godball", description: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.", image: "49.png", price: 6135, stock: 5, featured: true, active: true, action: true },
    { id: 50, catId: 3, title: "August", author: "Lorine Struijs", description: "Nullam varius.", image: "50.png", price: 9071, stock: 9, featured: true, active: false, action: true },
    { id: 51, catId: 5, title: "Exit Wounds", author: "Roxanne Cicculi", description: "Morbi a ipsum. Integer a nibh. In quis justo.", image: "51.png", price: 8633, stock: 10, featured: true, active: true, action: true },
    { id: 52, catId: 4, title: "Secret of the Wings", author: "Denys Sainthill", description: "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.", image: "52.png", price: 5774, stock: 5, featured: false, active: true, action: false },
    { id: 53, catId: 1, title: "Dead End", author: "Golda Kiddie", description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.", image: "53.png", price: 3618, stock: 7, featured: true, active: true, action: true },
    { id: 54, catId: 2, title: "Angels' Share, The", author: "Tessi Emmanuele", description: "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.", image: "54.png", price: 9838, stock: 10, featured: true, active: false, action: true },
    { id: 55, catId: 5, title: "Young Cassidy", author: "Lynna Gronaver", description: "Aenean fermentum. Donec ut mauris eget massa tempor convallis.", image: "55.png", price: 6001, stock: 7, featured: false, active: true, action: false }]

  constructor() { }

  topFiveFeaturedProducts: Product[] = this.list.filter(product => product.featured)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  // productsInCategory(catId: number): Product[] {
  //   return this.list.filter(product => product.catId == catId)
  //     .sort(() => 0.5 - Math.random())
  //     .slice(0, 5);
  // }

  allProductsInCategory(catId: number): Product[] {
    return this.list.filter(product => product.catId == catId);
  }

  fiveRandomProductsInCategory(catId: number): Product[] {
    return this.allProductsInCategory(catId)
      // .sort(() => 0.5 - Math.random())
      .slice(0, 5);
  }

  getCard(id: number): ProductCard {
    const myCard = new ProductCard();
    const myProduct = this.list.find(item => item.id == id);
    if (myProduct) {
      myCard.id = myProduct.id;
      myCard.author = myProduct.author;
      myCard.title = myProduct.title;
      myCard.description = myProduct.description;
      myCard.image = "/src/assets/img/" + myProduct.image;
      myCard.price = myProduct.price;
      myCard.stock = myProduct.stock;
    };
    return myCard;
  }

  // productsWithPath(method: Function, id: number): Product[] | ProductCard {
  //   const array: any = method(id);
  //   if (array)
  //     array.map(item => item.image = "/src/assets/img/" + item.image);
  //   return
  // }

  productsWithPath(method: Function, id: number): Product[] {
    const array: any = method(id);
    if (array)
      array.map(item => item.image = "/src/assets/img/" + item.image);
    return array;
  }

}
