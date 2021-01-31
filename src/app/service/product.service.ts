import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list: Product[] = [{
    "id": 1,
    "catId": "cat01",
    "name": "Ferrari",
    "description": "599 GTB Fiorano",
    "image": "../../assets/img/01-Ferrari-599.jpg",
    "price": "$4049.34",
    "stock": 6,
    "featured": true,
    "active": false
  }, {
    "id": 2,
    "catId": "cat01",
    "name": "Mercedes-Benz",
    "description": "CL-Class",
    "image": "../../assets/img/02-Mercedes-Benz-CL-Class.jpg",
    "price": "$5914.03",
    "stock": 4,
    "featured": true,
    "active": false
  }, {
    "id": 3,
    "catId": "cat01",
    "name": "Pontiac",
    "description": "1000",
    "image": "../../assets/img/03-Pontiac-1000.jpg",
    "price": "$4002.02",
    "stock": 1,
    "featured": true,
    "active": true
  }, {
    "id": 4,
    "catId": "cat01",
    "name": "Mercedes-Benz",
    "description": "M-Class",
    "image": "../../assets/img/04-Mercedes-Benz-M-Class.jpg",
    "price": "$5183.87",
    "stock": 1,
    "featured": false,
    "active": true
  }, {
    "id": 5,
    "catId": "cat01",
    "name": "Subaru",
    "description": "Legacy",
    "image": "../../assets/img/05-Subaru-Legacy.jpg",
    "price": "$5780.13",
    "stock": 2,
    "featured": false,
    "active": false
  }, {
    "id": 6,
    "catId": "cat01",
    "name": "Toyota",
    "description": "Celica",
    "image": "../../assets/img/06-Toyota-Celica.jpg",
    "price": "$8312.35",
    "stock": 1,
    "featured": true,
    "active": false
  }, {
    "id": 7,
    "catId": "cat01",
    "name": "Ford",
    "description": "Fusion",
    "image": "../../assets/img/07-Ford-Fusion.jpg",
    "price": "$4565.55",
    "stock": 4,
    "featured": true,
    "active": true
  }, {
    "id": 8,
    "catId": "cat01",
    "name": "Ford",
    "description": "Bronco",
    "image": "../../assets/img/08-Ford-Bornco.jpg",
    "price": "$5870.24",
    "stock": 2,
    "featured": true,
    "active": false
  }, {
    "id": 9,
    "catId": "cat01",
    "name": "Ford",
    "description": "Escort",
    "image": "../../assets/img/09-Ford-Escort.jpg",
    "price": "$4326.40",
    "stock": 4,
    "featured": true,
    "active": false
  }, {
    "id": 10,
    "catId": "cat01",
    "name": "Ford",
    "description": "F-Series",
    "image": "../../assets/img/10-Ford-F-Series.jpg",
    "price": "$5892.99",
    "stock": 3,
    "featured": true,
    "active": false
  }, {
    "id": 11,
    "catId": "cat01",
    "name": "Lexus",
    "description": "RX Hybrid",
    "image": "../../assets/img/11-Lexus-RX-Hybrid.jpg",
    "price": "$5639.32",
    "stock": 1,
    "featured": true,
    "active": true
  }, {
    "id": 12,
    "catId": "cat01",
    "name": "Land Rover",
    "description": "Defender 110",
    "image": "../../assets/img/12-Land-Rover-Defender-110.jpg",
    "price": "$4306.90",
    "stock": 1,
    "featured": false,
    "active": true
  }, {
    "id": 13,
    "catId": "cat01",
    "name": "Ford",
    "description": "F250",
    "image": "../../assets/img/13-Ford_F250.jpg",
    "price": "$7468.42",
    "stock": 3,
    "featured": false,
    "active": true
  }, {
    "id": 14,
    "catId": "cat01",
    "name": "Ford",
    "description": "EXP",
    "image": "../../assets/img/14-Ford-EXP.jpg",
    "price": "$7164.26",
    "stock": 1,
    "featured": true,
    "active": true
  }, {
    "id": 15,
    "catId": "cat01",
    "name": "Acura",
    "description": "Vigor",
    "image": "../../assets/img/15-Acura-Vigor.jpg",
    "price": "$4495.51",
    "stock": 3,
    "featured": true,
    "active": true
  }, {
    "id": 16,
    "catId": "cat01",
    "name": "Mitsubishi",
    "description": "Galant",
    "image": "../../assets/img/16-Mitsubishi-Galant.jpg",
    "price": "$5417.73",
    "stock": 2,
    "featured": false,
    "active": false
  }, {
    "id": 17,
    "catId": "cat01",
    "name": "Hyundai",
    "description": "Sonata",
    "image": "../../assets/img/17-Hyundai-Sonata.jpg",
    "price": "$7977.57",
    "stock": 5,
    "featured": false,
    "active": false
  }, {
    "id": 18,
    "catId": "cat01",
    "name": "Toyota",
    "description": "Sienna",
    "image": "../../assets/img/18-Toyota-Sienna.jpg",
    "price": "$5430.52",
    "stock": 3,
    "featured": false,
    "active": true
  }, {
    "id": 19,
    "catId": "cat01",
    "name": "Mercury",
    "description": "Topaz",
    "image": "../../assets/img/19-Mercury-Topaz.jpg",
    "price": "$4325.64",
    "stock": 3,
    "featured": false,
    "active": false
  }, {
    "id": 20,
    "catId": "cat01",
    "name": "GMC",
    "description": "Savana",
    "image": "../../assets/img/20-GMC-Savana.jpg",
    "price": "$6295.92",
    "stock": 3,
    "featured": true,
    "active": false
  }, {
    "id": 21,
    "catId": "cat01",
    "name": "Bentley",
    "description": "Continental",
    "image": "../../assets/img/21-Bentley-Continental.jpg",
    "price": "$8646.79",
    "stock": 3,
    "featured": false,
    "active": true
  }, {
    "id": 22,
    "catId": "cat01",
    "name": "Toyota",
    "description": "Xtra",
    "image": "../../assets/img/22-Toyota-Xtra.jpg",
    "price": "$6024.99",
    "stock": 5,
    "featured": true,
    "active": true
  }, {
    "id": 23,
    "catId": "cat01",
    "name": "Chevrolet",
    "description": "HHR",
    "image": "../../assets/img/23-Chevrolet-HRR.jpg",
    "price": "$5849.04",
    "stock": 4,
    "featured": true,
    "active": true
  }, {
    "id": 24,
    "catId": "cat01",
    "name": "Lincoln",
    "description": "Mark LT",
    "image": "../../assets/img/24-Lincoln-Mark-LT.jpg",
    "price": "$7557.37",
    "stock": 3,
    "featured": false,
    "active": true
  }, {
    "id": 25,
    "catId": "cat01",
    "name": "Kia",
    "description": "Rondo",
    "image": "../../assets/img/25-Kia-Rondo.jpg",
    "price": "$7328.99",
    "stock": 3,
    "featured": false,
    "active": true
  }, {
    "id": 26,
    "catId": "cat02",
    "name": "Porsche",
    "description": "Boxster",
    "image": "../../assets/img/26-2020_porsche_718-boxster.jpg",
    "price": "$5178.15",
    "stock": 2,
    "featured": true,
    "active": true
  }, {
    "id": 27,
    "catId": "cat02",
    "name": "GMC",
    "description": "Sonoma Club",
    "image": "../../assets/img/27-gmc-sonoma.jpg",
    "price": "$7899.65",
    "stock": 1,
    "featured": true,
    "active": true
  }, {
    "id": 28,
    "catId": "cat02",
    "name": "Mercury",
    "description": "Sable",
    "image": "../../assets/img/28-mercury-sable.jpg",
    "price": "$8405.19",
    "stock": 2,
    "featured": false,
    "active": false
  }, {
    "id": 29,
    "catId": "cat02",
    "name": "Lotus",
    "description": "Elise",
    "image": "../../assets/img/29-lotus-elisejpg.jpg",
    "price": "$4101.31",
    "stock": 6,
    "featured": false,
    "active": false
  }, {
    "id": 30,
    "catId": "cat02",
    "name": "Infiniti",
    "description": "QX56",
    "image": "../../assets/img/30-01-2013-infiniti-qx56.jpg",
    "price": "$5769.75",
    "stock": 6,
    "featured": true,
    "active": true
  }, {
    "id": 31,
    "catId": "cat02",
    "name": "Chevrolet",
    "description": "Lumina",
    "image": "../../assets/img/31-chevrolet-lumina.jpg",
    "price": "$6098.48",
    "stock": 5,
    "featured": true,
    "active": true
  }, {
    "id": 32,
    "catId": "cat02",
    "name": "Dodge",
    "description": "Magnum",
    "image": "../../assets/img/32-dodge-magnum.jpg",
    "price": "$7304.70",
    "stock": 5,
    "featured": false,
    "active": false
  }, {
    "id": 33,
    "catId": "cat02",
    "name": "Mazda",
    "description": "Familia",
    "image": "../../assets/img/33-mazda-familia.jpg",
    "price": "$8491.20",
    "stock": 3,
    "featured": false,
    "active": true
  }, {
    "id": 34,
    "catId": "cat02",
    "name": "GMC",
    "description": "Yukon XL 1500",
    "image": "../../assets/img/34-gmc-yukon.jpg",
    "price": "$5875.37",
    "stock": 6,
    "featured": true,
    "active": true
  }, {
    "id": 35,
    "catId": "cat02",
    "name": "Saab",
    "description": "9-3",
    "image": "../../assets/img/35-saab-9-3-2002-kulso-1.jpg",
    "price": "$5200.86",
    "stock": 1,
    "featured": false,
    "active": true
  }, {
    "id": 36,
    "catId": "cat02",
    "name": "Volkswagen",
    "description": "Jetta III",
    "image": "../../assets/img/36-vw-jetta-iii.jpg",
    "price": "$7336.35",
    "stock": 5,
    "featured": true,
    "active": true
  }, {
    "id": 37,
    "catId": "cat02",
    "name": "Toyota",
    "description": "Land Cruiser",
    "image": "../../assets/img/37-2021-toyota-land-cruiser-mmp-1-1596116800.jpg",
    "price": "$7622.10",
    "stock": 1,
    "featured": false,
    "active": false
  }, {
    "id": 38,
    "catId": "cat02",
    "name": "Ford",
    "description": "E-Series",
    "image": "../../assets/img/38-2010_ford_econoline_cargo_van.jpg",
    "price": "$4761.38",
    "stock": 3,
    "featured": true,
    "active": true
  }, {
    "id": 39,
    "catId": "cat02",
    "name": "Ford",
    "description": "Taurus",
    "image": "../../assets/img/39-2010_Ford_Taurus.jpg",
    "price": "$7736.82",
    "stock": 5,
    "featured": true,
    "active": false
  }, {
    "id": 40,
    "catId": "cat02",
    "name": "Subaru",
    "description": "SVX",
    "image": "../../assets/img/40-subaru-svx.jpg",
    "price": "$5128.02",
    "stock": 4,
    "featured": false,
    "active": true
  }, {
    "id": 41,
    "catId": "cat02",
    "name": "Audi",
    "description": "Coupe GT",
    "image": "../../assets/img/41-1986_audi_coupe.jpg",
    "price": "$6877.91",
    "stock": 5,
    "featured": false,
    "active": false
  }, {
    "id": 42,
    "catId": "cat02",
    "name": "Scion",
    "description": "tC",
    "image": "../../assets/img/42-scion-tc.jpg",
    "price": "$7160.94",
    "stock": 3,
    "featured": false,
    "active": true
  }, {
    "id": 43,
    "catId": "cat02",
    "name": "Lamborghini",
    "description": "Gallardo",
    "image": "../../assets/img/43-lamborghini-gallardo-lp-570-4-squadra-corse.jpg",
    "price": "$7937.14",
    "stock": 5,
    "featured": false,
    "active": false
  }, {
    "id": 44,
    "catId": "cat02",
    "name": "Chrysler",
    "description": "Town & Country",
    "image": "../../assets/img/44-2016_chrysler_town-and-country_passenger-minivan_limited_fq_oem_1_1600.jpg",
    "price": "$7077.40",
    "stock": 4,
    "featured": false,
    "active": false
  }, {
    "id": 45,
    "catId": "cat02",
    "name": "Jeep",
    "description": "Wrangler",
    "image": "../../assets/img/45-jeep-wrangler-rubicon-392-concept.jpg",
    "price": "$5639.57",
    "stock": 3,
    "featured": true,
    "active": false
  }, {
    "id": 46,
    "catId": "cat02",
    "name": "Lincoln",
    "description": "Town Car",
    "image": "../../assets/img/46-lincoln-town-car.jpg",
    "price": "$5529.73",
    "stock": 3,
    "featured": true,
    "active": true
  }, {
    "id": 47,
    "catId": "cat02",
    "name": "Toyota",
    "description": "Celica",
    "image": "../../assets/img/47-toyota-celica-1.jpg",
    "price": "$5769.48",
    "stock": 3,
    "featured": true,
    "active": false
  }, {
    "id": 48,
    "catId": "cat02",
    "name": "Ford",
    "description": "Windstar",
    "image": "../../assets/img/48-Ford_Windstar.jpg",
    "price": "$8997.02",
    "stock": 4,
    "featured": false,
    "active": true
  }, {
    "id": 49,
    "catId": "cat02",
    "name": "Subaru",
    "description": "Outback",
    "image": "../../assets/img/49-2020_subaru_outback_4dr-suv_onyx-edition-xt_fq_oem_1_1600.jpg",
    "price": "$4533.05",
    "stock": 1,
    "featured": true,
    "active": true
  }, {
    "id": 50,
    "catId": "cat02",
    "name": "Chevrolet",
    "description": "Cavalier",
    "image": "../../assets/img/50-chevrolet-cavalier.jpg",
    "price": "$5104.65",
    "stock": 1,
    "featured": false,
    "active": false
  },]

  constructor() { }

}
