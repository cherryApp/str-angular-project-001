import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  
  // list: Product[] = JSON.parse(JSON.stringify('../../server/db/products.json'))

  list: Product[] = JSON.parse(JSON.stringify(
    [
      {
          "id": 1,
          "catId": 1,
          "name": "Latlux",
          "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
          "image": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
          "price": "€59,19",
          "stock": 89,
          "featured": true,
          "active": true
      },
      {
          "id": 2,
          "catId": 1,
          "name": "Sonair",
          "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
          "image": "http://dummyimage.com/200x200.jpg/dddddd/000000",
          "price": "€47,39",
          "stock": 35,
          "featured": true,
          "active": false
      },
      {
          "id": 3,
          "catId": 1,
          "name": "Domainer",
          "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
          "image": "http://dummyimage.com/200x200.jpg/dddddd/000000",
          "price": "€87,65",
          "stock": 29,
          "featured": true,
          "active": false
      },
      {
          "id": 4,
          "catId": 1,
          "name": "Tampflex",
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
          "image": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
          "price": "€85,02",
          "stock": 10,
          "featured": false,
          "active": true
      },
      {
          "id": 5,
          "catId": 2,
          "name": "Aerified",
          "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
          "image": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
          "price": "€59,06",
          "stock": 55,
          "featured": true,
          "active": true
      },
      {
          "id": 6,
          "catId": 2,
          "name": "Subin",
          "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
          "image": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
          "price": "€62,57",
          "stock": 2,
          "featured": false,
          "active": true
      },
      {
          "id": 7,
          "catId": 1,
          "name": "Y-Solowarm",
          "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
          "image": "http://dummyimage.com/200x200.jpg/cc0000/ffffff",
          "price": "€44,21",
          "stock": 93,
          "featured": false,
          "active": true
      },
      {
          "id": 8,
          "catId": 2,
          "name": "Wrapsafe",
          "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
          "image": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
          "price": "€67,46",
          "stock": 10,
          "featured": true,
          "active": true
      },
      {
          "id": 9,
          "catId": 1,
          "name": "Tempsoft",
          "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
          "image": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
          "price": "€67,90",
          "stock": 59,
          "featured": true,
          "active": false
      },
      {
          "id": 10,
          "catId": 2,
          "name": "Redhold",
          "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
          "image": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
          "price": "€83,82",
          "stock": 94,
          "featured": false,
          "active": false
      },
      {
          "id": 11,
          "catId": 1,
          "name": "Tin",
          "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
          "image": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
          "price": "€20,76",
          "stock": 93,
          "featured": true,
          "active": true
      },
      {
          "id": 12,
          "catId": 1,
          "name": "Hatity",
          "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
          "image": "http://dummyimage.com/200x200.jpg/dddddd/000000",
          "price": "€42,65",
          "stock": 49,
          "featured": true,
          "active": true
      },
      {
          "id": 13,
          "catId": 1,
          "name": "Zontrax",
          "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
          "image": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
          "price": "€23,21",
          "stock": 83,
          "featured": true,
          "active": false
      },
      {
          "id": 14,
          "catId": 2,
          "name": "Subin",
          "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
          "image": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
          "price": "€80,60",
          "stock": 25,
          "featured": false,
          "active": false
      },
      {
          "id": 15,
          "catId": 1,
          "name": "Fix San",
          "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
          "image": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
          "price": "€92,14",
          "stock": 23,
          "featured": true,
          "active": true
      },
      {
          "id": 16,
          "catId": 1,
          "name": "Bigtax",
          "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
          "image": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
          "price": "€82,57",
          "stock": 20,
          "featured": false,
          "active": false
      },
      {
          "id": 17,
          "catId": 1,
          "name": "Tin",
          "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
          "image": "http://dummyimage.com/200x200.jpg/dddddd/000000",
          "price": "€94,05",
          "stock": 82,
          "featured": false,
          "active": false
      },
      {
          "id": 18,
          "catId": 2,
          "name": "Y-find",
          "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          "image": "http://dummyimage.com/200x200.jpg/dddddd/000000",
          "price": "€50,71",
          "stock": 12,
          "featured": true,
          "active": true
      },
      {
          "id": 19,
          "catId": 1,
          "name": "Overhold",
          "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
          "image": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
          "price": "€44,02",
          "stock": 6,
          "featured": false,
          "active": false
      },
      {
          "id": 20,
          "catId": 2,
          "name": "Voyatouch",
          "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
          "image": "http://dummyimage.com/200x200.jpg/dddddd/000000",
          "price": "€68,35",
          "stock": 99,
          "featured": true,
          "active": false
      },
      {
          "id": 21,
          "catId": 2,
          "name": "Bigtax",
          "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
          "image": "http://dummyimage.com/200x200.jpg/dddddd/000000",
          "price": "€13,04",
          "stock": 59,
          "featured": true,
          "active": true
      },
      {
          "id": 22,
          "catId": 2,
          "name": "Konklux",
          "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
          "image": "http://dummyimage.com/200x200.jpg/dddddd/000000",
          "price": "€79,74",
          "stock": 40,
          "featured": false,
          "active": true
      },
      {
          "id": 23,
          "catId": 1,
          "name": "Bytecard",
          "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
          "image": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
          "price": "€22,09",
          "stock": 97,
          "featured": true,
          "active": true
      },
      {
          "id": 24,
          "catId": 1,
          "name": "Fixflex",
          "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
          "image": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
          "price": "€19,67",
          "stock": 11,
          "featured": true,
          "active": false
      },
      {
          "id": 25,
          "catId": 2,
          "name": "Sonair",
          "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
          "image": "http://dummyimage.com/200x200.jpg/cc0000/ffffff",
          "price": "€52,09",
          "stock": 93,
          "featured": false,
          "active": true
      },
      {
          "id": 26,
          "catId": 2,
          "name": "Wrapsafe",
          "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          "image": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
          "price": "€27,85",
          "stock": 43,
          "featured": true,
          "active": true
      },
      {
          "id": 27,
          "catId": 2,
          "name": "Sonair",
          "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
          "image": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
          "price": "€28,74",
          "stock": 33,
          "featured": true,
          "active": false
      },
      {
          "id": 28,
          "catId": 1,
          "name": "Span",
          "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
          "image": "http://dummyimage.com/200x200.jpg/dddddd/000000",
          "price": "€90,88",
          "stock": 84,
          "featured": false,
          "active": true
      },
      {
          "id": 29,
          "catId": 1,
          "name": "Prodder",
          "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
          "image": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
          "price": "€50,44",
          "stock": 3,
          "featured": true,
          "active": false
      },
      {
          "id": 30,
          "catId": 1,
          "name": "Regrant",
          "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
          "image": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
          "price": "€83,05",
          "stock": 20,
          "featured": true,
          "active": true
      },
      {
          "id": 31,
          "catId": 2,
          "name": "Stringtough",
          "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
          "image": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
          "price": "€95,96",
          "stock": 69,
          "featured": false,
          "active": true
      },
      {
          "id": 32,
          "catId": 1,
          "name": "Mat Lam Tam",
          "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
          "image": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
          "price": "€80,35",
          "stock": 6,
          "featured": false,
          "active": false
      },
      {
          "id": 33,
          "catId": 2,
          "name": "Greenlam",
          "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
          "image": "http://dummyimage.com/200x200.jpg/cc0000/ffffff",
          "price": "€70,22",
          "stock": 68,
          "featured": true,
          "active": true
      },
      {
          "id": 34,
          "catId": 2,
          "name": "Overhold",
          "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
          "image": "http://dummyimage.com/200x200.jpg/dddddd/000000",
          "price": "€37,42",
          "stock": 20,
          "featured": false,
          "active": false
      },
      {
          "id": 35,
          "catId": 2,
          "name": "Tresom",
          "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
          "image": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
          "price": "€10,02",
          "stock": 40,
          "featured": false,
          "active": false
      },
      {
          "id": 36,
          "catId": 2,
          "name": "Redhold",
          "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
          "image": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
          "price": "€78,42",
          "stock": 7,
          "featured": true,
          "active": true
      },
      {
          "id": 37,
          "catId": 1,
          "name": "Keylex",
          "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
          "image": "http://dummyimage.com/200x200.jpg/cc0000/ffffff",
          "price": "€73,42",
          "stock": 65,
          "featured": false,
          "active": false
      },
      {
          "id": 38,
          "catId": 1,
          "name": "Tresom",
          "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
          "image": "http://dummyimage.com/200x200.jpg/dddddd/000000",
          "price": "€28,94",
          "stock": 43,
          "featured": true,
          "active": false
      },
      {
          "id": 39,
          "catId": 2,
          "name": "Cardguard",
          "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
          "image": "http://dummyimage.com/200x200.jpg/dddddd/000000",
          "price": "€18,58",
          "stock": 96,
          "featured": false,
          "active": true
      },
      {
          "id": 40,
          "catId": 1,
          "name": "Job",
          "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
          "image": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
          "price": "€94,22",
          "stock": 58,
          "featured": true,
          "active": true
      },
      {
          "id": 41,
          "catId": 1,
          "name": "Y-Solowarm",
          "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
          "image": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
          "price": "€31,09",
          "stock": 62,
          "featured": true,
          "active": false
      },
      {
          "id": 42,
          "catId": 2,
          "name": "Fintone",
          "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
          "image": "http://dummyimage.com/200x200.jpg/dddddd/000000",
          "price": "€94,42",
          "stock": 48,
          "featured": false,
          "active": true
      },
      {
          "id": 43,
          "catId": 2,
          "name": "Hatity",
          "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
          "image": "http://dummyimage.com/200x200.jpg/dddddd/000000",
          "price": "€53,89",
          "stock": 72,
          "featured": true,
          "active": false
      },
      {
          "id": 44,
          "catId": 2,
          "name": "Voltsillam",
          "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
          "image": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
          "price": "€85,15",
          "stock": 24,
          "featured": false,
          "active": false
      },
      {
          "id": 45,
          "catId": 1,
          "name": "Zaam-Dox",
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
          "image": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
          "price": "€42,28",
          "stock": 86,
          "featured": true,
          "active": false
      },
      {
          "id": 46,
          "catId": 2,
          "name": "Fix San",
          "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
          "image": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
          "price": "€99,79",
          "stock": 21,
          "featured": true,
          "active": false
      },
      {
          "id": 47,
          "catId": 1,
          "name": "Andalax",
          "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
          "image": "http://dummyimage.com/200x200.jpg/dddddd/000000",
          "price": "€73,29",
          "stock": 13,
          "featured": false,
          "active": true
      },
      {
          "id": 48,
          "catId": 2,
          "name": "Trippledex",
          "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
          "image": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
          "price": "€13,29",
          "stock": 5,
          "featured": false,
          "active": true
      },
      {
          "id": 49,
          "catId": 1,
          "name": "Mat Lam Tam",
          "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
          "image": "http://dummyimage.com/200x200.jpg/cc0000/ffffff",
          "price": "€41,90",
          "stock": 81,
          "featured": false,
          "active": true
      },
      {
          "id": 50,
          "catId": 2,
          "name": "Otcom",
          "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
          "image": "http://dummyimage.com/200x200.jpg/cc0000/ffffff",
          "price": "€17,20",
          "stock": 81,
          "featured": true,
          "active": false
      }
  ]))
}
